import { useState } from "react";
import "./HeaderBox.scss";
import { firestore } from '../../services/firebase';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Menu } from "../menu/Menu";


export const HeaderBox = () => {
  const [TextMessage, setTextMessage] = useState("");
  const { user, signInWithGoogle } = useContext(AuthContext);

  console.log(user)
  const sendText = (e:any) => {
    e.preventDefault();

    firestore.collection("posts").add({
      displayName: user?.name,
      userID: user?.id,
      text: TextMessage,
      avatar: user?.avatar,
    }).then((docRef) => {
          firestore.doc(`posts/${docRef.id}`).update({ id: docRef.id });
        });
  

    setTextMessage("");
  };

  return (
    <div className="headerBox">
      <div style={{marginTop: '44px'}}>
      <Menu /></div>
      <form>
        <div className="headerBox__input">
          <img src={`${user?.avatar}`} />
          <textarea
            onChange={(e) => setTextMessage(e.target.value)}
            value={TextMessage}
            placeholder="What's happening?"
            
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
