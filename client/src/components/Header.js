import PropTypes from "prop-types"

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <a href="/memes" className="logo"><h1>{title}</h1></a>
            <button className="butn justify-right"
                onClick={onAdd}>{showAdd ? "Close" : "Add Meme"}</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'XMeme',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;