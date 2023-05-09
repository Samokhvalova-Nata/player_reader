export const VideoList = ({ videos, onSelect}) => {
    return (
        <ul>
        {videos.map(({id, link}) => (
            <li key={id}>
                <a href={link}  onClick={() => onSelect(link)}>
                    {link}
                </a>
            </li>
        ))}
        </ul>)
        
}