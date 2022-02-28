import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card.jsx';
import Portal from './components/portal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [cards, setCards] = useState([]);
  const [collectionID, setCollectionID] = useState();
  const [trigger, setTrigger] = useState(false);
  const [emptyCardCollection, setEmptyCardCollection] = useState(true)

  useEffect(async () => {
    if (cards.length === 0) setEmptyCardCollection(true);
    else setEmptyCardCollection(false);
  }, [cards]);

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>

      <div className="loading">
        <h1 className={emptyCardCollection ? 'no-cards' : 'no-cards  no-visible'} id="no-cards">{emptyCardCollection && 'No cards'}</h1>
      </div>

      <div className="todo-cards" id="todo-cards">
        {
          cards.map(card => {
            
            return (
              <Card title={card.title} description={card.description} key={card.id} id={card.id} setCards={setCards} cards={cards}/>
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
