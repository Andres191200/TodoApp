import '../styles/portal.css';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const closeNewCardPopUp = (event, setTrigger, trigger) => {
    event.preventDefault();
    setTrigger(!trigger);
}

const saveNewCard = (event, setTrigger, trigger, cards, setCards) => {

    const titleRequired = document.getElementById('title-field-required')
    const descriptionRequired = document.getElementById('description-field-required')
    const title = document.getElementById('card-title').value;
    const description = document.getElementById('card-content').value;
    const form = document.getElementById('new-card-form');
    event.preventDefault();
    if (title === null || title.match(/^ *$/) !== null){
        titleRequired.classList.add('visible');
    }
    else if (description === null || description.match(/^ *$/) !== null) {
        descriptionRequired.classList.add('visible');
    } else {
        addDoc(collection(db, "todos"), { title, description });
        setCards([...cards, { title, description, id: cards.length + 1 }]);
        console.log(cards);
        closeNewCardPopUp(event, setTrigger, trigger);
    }
}

const Portal = ({ trigger, setTrigger, cards, setCards }) => {
    return (trigger) ? (
        <div className="new-card-main-container">
            <div className="new-card-container">
                <form id="new-card-form" onSubmit={(event) => saveNewCard(event, setTrigger, trigger, cards, setCards)}>
                    <button className="close-btn" onClick={(event) => closeNewCardPopUp(event, setTrigger, trigger)}>X</button>
                    <label htmlFor="card-title">Title <p id="title-field-required" className="field-required">This field is required</p></label>         
                    <input type="text" name="card-title" id="card-title"></input>
                    <label htmlFor="card-content">Content <p id="description-field-required" className="field-required">This field is required</p></label>
                    <textarea className="card-content" name="card-content" id="card-content"></textarea>
                    <div className="submit-btn-container">
                        <button type="submit" className="submit-new-card-btn">Create</button>
                    </div>
                </form>
            </div>
        </div>
    ) : "";
}

export default Portal;

