import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/card.css';

import { doc, deleteDoc, arrayRemove } from "firebase/firestore";
import { db } from '../firebase';



const deleteCard = async (id, setCards, cards) => {

    let stateCopy = [...cards];
    let target = stateCopy.map(item => item.id.indexOf(id)).indexOf(0);

    stateCopy.splice(target,1);

    setCards(stateCopy);
    
    await deleteDoc(doc(db, "todos", id.toString()));
}

const Card = ({ title, description, id, setCards, cards }) => {
    return (
        <div className={`card card-${id}`} id='card' id={id}>
            <div className="main-info-container">
                <div className="title-div">
                    <h1>{title}</h1>
                </div>
                <div className="card-icons-container">
                    <div>
                        <FontAwesomeIcon className="edit-card-icon card-icon" icon={faPencilAlt} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="delete-card-icon card-icon" icon={faTrashAlt} onClick={() => deleteCard(id, setCards, cards)} />
                    </div>
                </div>
            </div>

            <div className="content-div">
                <h1>{description}</h1>
            </div>
        </div>
    )
}

export default Card;