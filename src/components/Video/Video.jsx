import { Component } from "react";
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { VideoList } from '../VideoList/VideoList';
import videos from '../../data/videos.json';

export class Video extends Component {
    state = {
        selectedVideo: null,
    }

    selectVideo = link => {
        this.setState({ selectedVideo: link });
    }

    render() {
        const { selectedVideo } = this.state;
        
        return (
            <div>
                <h1>Selected video: {selectedVideo}</h1>
                <VideoList videos={videos} onSelect={this.selectVideo} />
                <VideoPlayer url={selectedVideo} />
            </div>
        );
    }
}