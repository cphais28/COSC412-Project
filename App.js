import { useState, useEffect } from "react";
import './App.css';
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [newID, setNewID] = useState("")
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newEmail, setNewEmail] = useState("")
  const [newPass, setNewPass] = useState("")

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {tu_id: newID, name: newName, age: newAge, email: newEmail, password: newPass});
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }

    getUsers()
  }, []);

  return (
    <div className="App">
      <input 
        placeholder="TU ID..."
        onChange={(event) => {
          setNewID(event.target.value);
        }}
      />
      <input 
        placeholder="Name..." 
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input 
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <input
        placeholder="Email..."
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
      <input 
        placeholder="Password..."
        onChange={(event) => {
          setNewPass(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>TU ID: {user.tu_id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1> 
            <h1>Email: {user.email}</h1>
            <h1>Password: {user.password}</h1>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button> 
          </div>
        );
      })}
    </div>
  );
}

export default App;
