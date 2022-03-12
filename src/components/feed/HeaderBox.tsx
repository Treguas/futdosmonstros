import { useState } from "react";
import "./HeaderBox.scss";


export const HeaderBox = () => {
  const [TextMessage, setTextMessage] = useState("");
  const [TextImage, setTextImage] = useState("");

  const sendText = (e:any) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   displayName: "Vagner Treguas",
    //   username: "vtreguas",
    //   verified: true,
    //   text: TextMessage,
    //   image: TextImage,
    //   avatar:
    //     "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    // });

    setTextMessage("");
  };

  return (
    <div className="headerBox">
      <form>
        <div className="headerBox__input">
          <img src="https://avatars.githubusercontent.com/u/60155617?v=4" />
          <input
            onChange={(e) => setTextMessage(e.target.value)}
            value={TextMessage}
            placeholder="What's happening?"
            type="text"
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
