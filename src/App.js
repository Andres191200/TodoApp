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
  const [collectionID, setCollectionID] = useState();
  const [trigger, setTrigger] = useState(false);
  const [emptyCardCollection, setEmptyCardCollection] = useState(false)

  useEffect(async () => {
    if (cards.length === 0) setEmptyCardCollection(true);
    else setEmptyCardCollection(false);
  }, [cards]);

  const loadingCards = () => {
    if (emptyCardCollection) return 'No cards';
    if (document.getElementById('card') != null) document.getElementById('no-cards').classList.add('no-visible');
    else return 'Loading...';
  }

  return (
    <div className="App">
      {/* <button id='buton' onClick={addCardToDatabase}>UPLOAD</button>  */}
      <header>
        <h1>Todo App</h1>
      </header>

      <div className="loading">
          <h1 className="no-cards" id="no-cards">{loadingCards()}</h1>
      </div>

      <div className="todo-cards" id="todo-cards">
        {

          cards.map(card => {
            return (
              console.log(card),
              <Card title={card.title} description={card.description} key={card.id} />

            )

          })
        }
      </div>

      <div className="plus-icon-div">
        <button onClick={() => setTrigger(!trigger)}>
          <FontAwesomeIcon className="plus-icon" icon={faPlus} />
        </button>
      </div>

      <Portal trigger={trigger} setTrigger={setTrigger} cards={cards} setCards={setCards} />

    </div>
  );
}

export default App;
