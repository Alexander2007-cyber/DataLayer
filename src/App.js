import "./App.css";
import Header from "./Header";
import Login from "./Login";
import { useStateValue } from "./stateProvider";
import db, { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("room").onSnapshot((snapshot) => setData(
      snapshot.docs.map((doc) => doc.data())
    ))
    return () => {
      unsubscribe();
    }
  });

  const createRoom = () => {
    const roomName = prompt("Enter room name:");
    if (roomName) {
      db.collection("room").add({
        name: roomName,
      });
    }
  };

  return (
    <div className="App">
      <Header />

      {!user ? (
        <div>
          <Login />
        </div>
      ) : (
        <>
          <button onClick={() => console.log(data)}>See data</button>
          <button onClick={() => createRoom()}>Add</button>
          <br></br>
          {data.map(obj => (<h2>{obj.name}</h2>))}
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      )}
      <button onClick={() => (user ? console.log(user) : console.log())}>
        1Click
      </button>
    </div>
  );
}

export default App;
