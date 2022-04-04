import { useState } from "react";
import "./HeaderBox.scss";
import { firestore } from '../../services/firebase';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";


export const HeaderBox = () => {
  const [TextMessage, setTextMessage] = useState("");
  const { user, signInWithGoogle } = useContext(AuthContext);

  // console.log(user)
  const date = new Date();
  const dateReturned = date.toLocaleDateString(
    'pt-br',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
  });
  
  const sendText = (e:any) => {
    e.preventDefault();

    if (TextMessage != '')
    {
      firestore.collection("posts").add({
        displayName: user?.name,
        userID: user?.id,
        text: TextMessage,
        avatar: user?.avatar,
        dateReturned: dateReturned
      }).then((docRef) => {
        firestore.doc(`posts/${docRef.id}`).update({ id: docRef.id });
      });
    } else
    {
      toast.error("This didn't work.");
      console.log("This didn't work.");
    }

    setTextMessage("");
  };





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
