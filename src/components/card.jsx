import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/card.css'
const Card = ({ title, description }) => {
    return (
        <div className="card" id="card">
            <div className="title-div">
                <h1>{title}</h1>
                <div className="card-icons-container">
                    <FontAwesomeIcon className="edit-card-icon" icon={faPencilAlt} />
                    <FontAwesomeIcon className="delete-card-icon" icon={faTrashAlt} />
                </div>
            </div>
            <div className="content-div">
                <h1>{description}</h1>
            </div>
        </div>
    )
}

export default Card;