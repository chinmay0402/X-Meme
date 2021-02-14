import Meme from "./Meme"
const Memes = ({ memes, onDelete, onEdit }) => {
    const List = [];
    for(let i=memes.length-1; i>=0; i--){
        List.push(memes[i]);
    }
    return (
        <div className="all-memes shadow-sm p-5 mb-5 bg-white rounded border border-shadow border-light">
            {List.map((meme) => (
                <Meme key={meme.id} meme={meme} onDelete={onDelete} onEdit={onEdit}/>
            ))}
        </div>
    )
}

export default Memes
