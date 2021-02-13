import EditMeme from "./EditMeme"
import { useState } from "react"

const Meme = ({ meme, onDelete, onEdit }) => {
    const [showEditMeme, setShowEditMeme] = useState(true)
    const OnEdit = () => {
        setShowEditMeme(!showEditMeme);
    }
    return (
        <div className="meme shadow p-1 mb-5 bg-white rounded border border-shadow border-light">
            <div className="meme-head">
                <h6 className="meme-owner">{meme.name}</h6>
                <div className="options">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" viewBox="0 0 16 16" onClick={() => OnEdit()} cursor="pointer" className="edit">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 15 15" onClick={() => onDelete(meme.id)} cursor="pointer" className="delete justify-right">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </div>
            </div>

            {(showEditMeme) ? (
                <div>
                    <img src={meme.url} onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg" }} alt="meme" />
                    <p className="caption lead">{meme.caption}</p>
                </div>
            ) : (
                    <EditMeme onEdit={onEdit} meme={meme} />
                )}
        </div>
    )
}

export default Meme
