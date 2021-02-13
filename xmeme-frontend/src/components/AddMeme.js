import {useState} from "react"
const AddMeme = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [caption, setCaption] = useState('');

    const onSubmit = (e) => {
        onAdd({name, url, caption});

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
              className="input-control border rounded"
              placeholder="Write in your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="Be creative with your caption"
              value={caption}
              onChange={(e) => setCaption(e.currentTarget.value)}
              required
            />
          </div>
    
          <input type="submit" value="Submit Meme" className="btn btn-outline-success" />
        </form>
      )
}

export default AddMeme;