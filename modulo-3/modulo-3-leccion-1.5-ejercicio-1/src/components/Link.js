import '../styles/components/Link.scss'
const Link = ({ text, url, openInNewTab, handleNewTab }) => {
    function handleClick() {
        handleNewTab()
    }
    return (
        <li>
            <a href={url} rel="noreferrer" target={openInNewTab ? "_blank" : ''} onClick={handleClick}>{text}</a>
        </li >
    )
};
export default Link