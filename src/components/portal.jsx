import '../styles/portal.css';

const Portal = ({ trigger }) => {
    return (trigger) ? (
        <div className="new-card-main-container">
            <div className="new-card-container">
                <form >
                    <label for="card-title">Title</label>
                    <input type="text" name="card-title"></input>
                    <label for="card-content">Content</label>
                    <textarea className="card-content" name="card-content" rows="10"></textarea> 
                    <button type="submit" className="submit-new-card-btn">Create</button>
                </form>
            </div>
        </div>
    ) : "";
}

export default Portal;

