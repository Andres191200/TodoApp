import { useState } from 'react';
import './App.css';
import Card from './components/card.jsx';

function App() {
  const [cards, setCards] = useState([{ title: 'Card 1 title', content: 'this is an example toDo card' }, {title: 'Card 2 title', content:'Card 2 content'}])

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>

      <div className="todo-cards">
        {
          cards.map(card => {
            return (
              <Card title={card.title} content={card.content} />
            )
          })

          
          
        }
      </div>



    </div>
  );
}

export default App;
