import { useState, useEffect, useContext, ReactEventHandler, MouseEventHandler, ButtonHTMLAttributes } from "react";
import { HeaderBox } from "./HeaderBox";
import "./Feed.scss";
import { firestore } from "../../services/firebase";
import FlipMove from "react-flip-move";
import { AuthContext } from "../../contexts/AuthContext";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { user, signInWithGoogle } = useContext(AuthContext);


  useEffect(() => {
    firestore.collection("posts").onSnapshot((snapshot: any) =>
      setPosts(snapshot.docs.map((doc: any) => doc.data()))
    );



  }, []);

  type post = {
    avatar: string,
    displayName: string,
    id:string,
    userID: string,
    image: string,
    text: string
    username: string,
    verified: boolean
  }






  const teste = {
    background: '#fff',
    maxWidth: '800px',
    padding: '24px',
  }

  // function updateDataArtista(id, data: any) {
  //     this.firestore.doc('cadastrodeartistas/' + id).update(data);
  // }

  function deletePost(id:string) {
      firestore.doc(`posts/${id}`).delete();
  }

  return (
    <div>
      <div className="feed">
        <HeaderBox />
      </div>
      <div className="containerFeed">
        <FlipMove>
          {posts.map((post: post) => {
            return <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '13px' }}>
                <img style={{ borderRadius: '50%', width: '40px' }} src={post.avatar} />
                <span style={{ color: 'orange', paddingLeft: '13px' }}>{post.displayName}</span>
              </div>
              <p style={teste}>{post.text}</p>
              {user?.id == post.userID ? <button onClick={()=> {deletePost(post.id)}}>Delete</button> : null}
            </div>
          })

          }
        </FlipMove>





      </div>
    </div>
  );
}

export default Feed;

