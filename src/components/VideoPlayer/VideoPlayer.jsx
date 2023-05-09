import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class VideoPlayer extends Component {
    state = {
        isVideoLoaded: false,
    };

    render() {
        const { url } = this.props;

        return (
            <>
                {url && (
                    <PlayerWrapper>
                        <StyledPlayer
                            url={url}
                            controls/>
                    </PlayerWrapper>
                )
                }
                
            </>
        )
    }
}