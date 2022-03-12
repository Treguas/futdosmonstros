import { useState, useEffect } from "react";
import {HeaderBox} from "./HeaderBox";
import "./Feed.scss";
// import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed () {
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     db.collection("posts").onSnapshot((snapshot) =>
//       setPosts(snapshot.docs.map((doc) => doc.data()))
//     );
//   }, []);

  const teste = {
    background: '#fff',
    maxWidth: '800px',
    padding: '24px'
  }

    return (
      <div>
        <div className="feed">
          <HeaderBox />

        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", wordBreak: "normal", overflowWrap: 'break-word'}}>
          <FlipMove>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
              <p style={teste}>teste Foguete não tem ré 🚀 dddddddddddddddddddddde postagdddddddddddssddddddddddddddddddddddddddddssssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddem</p>
          
          </FlipMove>

        </div>
      </div>
    );
}

export default Feed;

