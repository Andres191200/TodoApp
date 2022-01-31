import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card.jsx';

import { getFirestore, collection, getDocs, connectFirestoreEmulator } from "firebase/firestore";
import { db } from './firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [cards, setCards] = useState([])

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "ToDos")); //DATABASE INSTANCE AND NAME OF THE COLLECTION
    var todos = []
    querySnapshot.forEach((doc) => {
      todos.push({
        id: doc.id, ...doc.data()
      });
    });
    setCards(todos);
  }, [cards])




  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>

      <div className="loading">
          <h1>{!document.contains(document.getElementById('card')) && 'Loading...'}</h1>
      </div>

      <div className="todo-cards">
        {
          cards.map(card => {
            return (
              <Card title={card.title} content={card.content} />
            )
          })
        }
      </div>

      <div className="plus-icon-div">
        <FontAwesomeIcon className="plus-icon" icon={faPlus} />
      </div>

    </div>
  );
}

export default App;
