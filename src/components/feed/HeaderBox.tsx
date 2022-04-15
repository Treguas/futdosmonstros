import { useState, useContext, useEffect } from 'react';
import './HeaderBox.scss';
import { firestore } from '../../services/firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { useToast } from '@chakra-ui/react';

export function HeaderBox() {
  const [TextMessage, setTextMessage] = useState('');
  const { user } = useContext(AuthContext);
  const toast = useToast();

  const [posts, setPosts] = useState([]);
  const [keyCount, setKeyCount] = useState([]);

  let count = keyCount.map((res: any) => { return res.count });

  useEffect(() => {
    firestore.collection('posts').onSnapshot((snapshot: any) =>
      setPosts(snapshot.docs.map((doc: any) => doc.data())));

    firestore.collection('keyCount').onSnapshot((snapshot: any) =>
      setKeyCount(snapshot.docs.map((doc: any) => doc.data())));

  }, []);

  const date = new Date();
  const dateReturned = date.toLocaleDateString(
    'pt-br',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  );

  function updateDataCount(count: any) {
    firestore.doc('/keyCount/lYa0ZZc2sRrf1UPrO681').update({ count });
  }

  function sendText(e: any) {
    e.preventDefault();

    if (TextMessage !== '') {
      firestore.collection('posts').add({
        displayName: user?.name,
        userID: user?.id,
        text: TextMessage,
        avatar: user?.avatar,
        keyCount: count[0] + 1,
        dateReturned,
      }).then((docRef) => {
        firestore.doc(`posts/${docRef.id}`).update({ id: docRef.id });
        updateDataCount(count[0] + 1);
      });
    } else {
      toast({
        description: 'Digite sua Mensagem',
        status: 'error',
        position: 'top',
        duration: 1000,
        isClosable: true,
      });
    }
    setTextMessage('');
  }

  return (
    <div className="headerBox">
      <form>
        <div className="headerBox__input">
          <img src={`${user?.avatar}`} />
          <textarea
            onChange={(e) => setTextMessage(e.target.value)}
            value={TextMessage}
            placeholder="Qual a boa?"

          />
        </div>
        <button
          onClick={sendText}
          type="submit"
          className="headerBox__TextButton"
        >
          Postar
        </button>
      </form>
    </div>
  );
}
