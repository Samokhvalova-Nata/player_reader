import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class VideoPlayer extends Component {
    state = {
        isVideoLoaded: false,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
            this.setState({isVideoLoaded: false})
        }
    }

    render() {
        const { url } = this.props;
        const { isVideoLoaded } = this.state;
        const showLoader = url && !isVideoLoaded;
        const playerSize = isVideoLoaded ? '100%' : 0;

        return (
            <>
                {showLoader && <h2>Loading video...</h2>}
                {url && (
                    <PlayerWrapper>
                        <StyledPlayer
                            url={url}
                            width={playerSize}
                            height={playerSize}
                            onReady={() => this.setState({isVideoLoaded: true})}
                            controls />
                    </PlayerWrapper>
                )}
            </>
        );
    }
}