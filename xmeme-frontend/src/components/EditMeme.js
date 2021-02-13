import { useState } from "react"
const EditMeme = ({ onEdit, meme }) => {
    const [name, setName] = useState(meme.name);
    const [url, setUrl] = useState(meme.url);
    const [caption, setCaption] = useState(meme.caption);
    const onSubmit = (e) => {
        const newMeme = { name, url, caption }
        onEdit(meme.id, newMeme);
        setName('');
        setUrl('');
        setCaption('');
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Meme-Owner* </label>
                <input
                    type="text"
                    className="border rounded"
                    placeholder="Write in your name"
                    value={name}
                    readOnly
                    required
                />
            </div>
            <div className="form-control">
                <label>Meme Url* </label>
                <input
                    type="url"
                    className="border rounded"
                    placeholder="URL of meme here"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
            </div>
            <div className="form-control">
                <label>Caption* </label>
                <input
                    type="text"
                    className="border rounded"
                    value={caption}
                    onChange={(e) => setCaption(e.currentTarget.value)}
                    required
                />
            </div>

            <input type="submit" value="Update Meme" className="btn btn-outline-success" />
        </form>
    )
}

export default EditMeme;