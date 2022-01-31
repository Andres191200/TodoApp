import '../styles/card.css'
const Card = ({ title, content }) => {
    return (
        <div className="card">
            <div className="title-div">
                <h1>{title}</h1>
            </div>
            <div className="content-div">
                <h1>{content}</h1>
            </div>
        </div>
    )
}

export default Card;