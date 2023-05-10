export const VideoList = ({ videos, onSelect }) => {
    return (
        <div>
            {videos.map(video => (
                <button type='button' key={video.id} onClick={() => onSelect(video.link)}>
                    {video.link}
                </button>
            ))}
        </div>)
};
