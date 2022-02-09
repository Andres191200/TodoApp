import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card.jsx';
import Portal from './components/portal';

import { getFirestore, collection, getDocs, doc, setDoc, addDoc, query } from "firebase/firestore";
import { db } from './firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [cards, setCards] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [emptyCardCollection, setEmptyCardCollection] = useState(false)

  useEffect(async () => { //READ DATA FROM DATABASE WHEN THE PAGE LOADS
    const querySnapshot = await getDocs(collection(db, "ToDos")); //DATABASE INSTANCE AND NAME OF THE COLLECTION
    var todos = []
    querySnapshot.forEach((doc) => {
      todos.push({
        id: doc.id, ...doc.data()
      });
      //querySnapshot.size RETURNS NUMBER OF DOCUMENTS IN A COLLECTION
    });
    if(todos.length === 0) setEmptyCardCollection(true);
    else setEmptyCardCollection(false);
    setCards(todos);
  }, [cards]);

  async function addCardToDatabase() {
    await addDoc(collection(db, 'ToDos'), {
      id: cards.length + 1,
      title: `card ${cards.length + 1} title`,
      content: 'content example'
    })
  }

  const loadingCards = () => {
    if(emptyCardCollection) return 'No cards';
    if(document.getElementById('card') != null) return '';
    else return 'Loading...';
  }

  return (
    <div className="App">
      {/* <button id='buton' onClick={addCardToDatabase}>UPLOAD</button>  */}
      <header>
        <h1>Todo App</h1>
      </header>

      <div className="loading">
        <h1>{loadingCards()}</h1>
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
        <button onClick={() => setTrigger(!trigger)}>
          <FontAwesomeIcon className="plus-icon" icon={faPlus}/>
        </button>
      </div>

      <Portal trigger={true} />

    </div>
  );
}

export default App;
