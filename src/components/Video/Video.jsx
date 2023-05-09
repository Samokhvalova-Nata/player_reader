import { Component } from "react";
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { VideoList } from '../VideoList/VideoList';
import videos from '../../data/videos.json';

export class Video extends Component {
    state = {
        selectedVideo: null,
    }

    selectVideo = link => {
        this.setState({ selectVideo: link });
    }

    render() {
        const { selectedVideo } = this.state;
        
        return (
            <>
                <h1>Selected video: {selectedVideo}</h1>
                <VideoList videos={videos} onSelect={this.selectVideo} />
                <VideoPlayer url={selectedVideo} />
            </>
        );
    }
}