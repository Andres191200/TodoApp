import '../styles/portal.css';

const Portal = ({ trigger }) => {
    return (trigger) ? (
        <div className="new-card-main-container">
            <div className="new-card-container">
                <form >
                    <label for="card-title">Title</label>
                    <input type="text" name="card-title"></input>
                    <label for="card-content">Content</label>
                    <textarea className="card-content" name="card-content"></textarea> 
                </form>
            </div>
        </div>
    ) : "";
}

export default Portal;

