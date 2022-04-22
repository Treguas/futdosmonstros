import {
  useState, useEffect, useContext,
} from 'react';
import { HeaderBox } from './HeaderBox';
import FlipMove from 'react-flip-move';
import './Feed.scss';
import { firestore } from '../../services/firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { DeleteIcon } from '@chakra-ui/icons'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';


function Feed() {
  const [posts, setPosts] = useState([]);
  const { user, signInWithGoogle } = useContext(AuthContext);

  useEffect(() => {
    firestore.collection('posts').orderBy('keyCount').onSnapshot((snapshot: any) =>
      setPosts(snapshot.docs.map((doc: any) => doc.data()).reverse()));
  }, []);

  type post = {
    avatar: string,
    displayName: string,
    id: string,
    userID: string,
    image: string,
    text: string
    username: string,
    verified: boolean,
    keyCount: number,
  }

  // function updateDataArtista(id, data: any) {
  //     this.firestore.doc('cadastrodeartistas/' + id).update(data);
  // }

  function deletePost(id: string) {
    firestore.doc(`posts/${id}`).delete();
  }

  return (
    <div className="bio_container">
      <div className="bio">
        <h3>
          <HeaderBox />
        </h3>
        <div>

          <FlipMove>
            {posts.map((post: post, i) => {
              return <div className="containerChat" key={post.id}>
                <div className="display">
                  <img className="avatar" src={post.avatar}></img>
                  <p className="displayName"><strong>{post.displayName}</strong></p>
                </div>
                <p className="textMessage">{post.text}</p>
                {user?.id === post.userID ? <button className="btnDelete" onClick={() => { deletePost(post.id); }}>Delete</button> : null}

              </div>
            })}
          </FlipMove>

        </div>
      </div>
    </div>

  );
}

export default Feed;

