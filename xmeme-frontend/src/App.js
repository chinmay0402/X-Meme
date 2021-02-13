import { useState, useEffect } from "react"
import Header from "./components/Header";
import Memes from "./components/Memes";
import AddMeme from "./components/AddMeme";
import Meme from "./components/Meme"

const App = () => {
  const [showAddMeme, setShowAddMeme] = useState(false)
  const [memes, setMemes] = useState([])
  const PORT = 8081
  useEffect(() => {
    const getMemes = () => {
      const pathname = window.location.pathname;
      fetch(`http://localhost:${PORT}${pathname}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          return data;
        })
        .then(memesFromServer => {
          setMemes(memesFromServer);
        })
        .catch(err => {
          console.log(err);
        })
    }
    getMemes()
  }, [])

  // Add Meme
  const addMeme = async (meme) => {
    const res = await fetch(`http://localhost:${PORT}/memes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meme),
    })
    const data = await res.json();
    setMemes([...memes, data]);
  }

  // Edit meme
  const editMeme = async (id, meme) => {
    fetch(`http://localhost:${PORT}/memes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meme),
    })
      .then(result => {
        console.log(result);
        setMemes([...memes])
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Delete Meme
  const deleteMeme = async (id) => {
    fetch(`http://localhost:${PORT}/memes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setMemes(memes.filter((meme) => meme.id !== id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddMeme(!showAddMeme)}
        showAdd={showAddMeme}
      />
      {showAddMeme && <AddMeme onAdd={addMeme} />}

      {(memes.length > 0) ? (
        <div>
          <Memes memes={memes} onDelete={deleteMeme} onEdit={editMeme} />
        </div>
      ) : ((typeof (memes) === "object" && memes.name !== undefined) ? (
        <Meme meme={memes} onDelete={deleteMeme} onEdit={editMeme} />
      ) : (
         <div>
          Either there are no memes to show, or the page you requested was not found :(
          <br/>
          Click on the "XMeme" logo to get back to the home page
          </div>
        ))}
    </div>
  )
}

export default App;
