import { Component, h, Prop} from '@stencil/core';
import { VimeoPlayer } from './functional-components/vimeo-player';
import { YouTubePlayer } from './functional-components/youtube-player'

const VIDEO_PROVIDERS = {
    YOUTUBE: 'youtube',
    VIMEO: 'vimeo'
}

@Component ({
    tag: "webtraining-video-player"
})
export class WebtrainingVideoPlayer {

    // video
    @Prop() source; 
    // tipo de proveedor
    @Prop() provider: string = VIDEO_PROVIDERS.YOUTUBE;

    render() {
        //si no hay vídeo aparece "No video source provided"
        if(!this.source) {
            return <div>No video source provided</div>;
        }

        return (
            // tiene que tener siempre un padre, un div
            <div class="b-video">

                {/* conditional rendering (sirve como un return) si no, se tendría que escribir en el lugar de este comentario*/}

                {/* {this.provider === "youtube" &&  para optimizar el código creo una función*/}
                {this.provider === VIDEO_PROVIDERS.YOUTUBE && 
                        // <div>
                        //     <h2>Youtube</h2>
                        //     <iframe width="560" height="315" 
                        //         src= {this.source}
                        //         title="YouTube video player" 
                        //         frameborder="0">
                        //     </iframe>
                        // </div>

                        // functional components
                        <YouTubePlayer source={this.source}></YouTubePlayer>
                }

                {/* conditional rendering */}
                {this.provider === VIDEO_PROVIDERS.VIMEO && 

                        // Para no repetir la misma información, nos la llevamos al archivo de la función "video-player.tsx"

                        // <div>
                        //     <h2>Vimeo</h2>
                        //     <iframe width="560" height="315" 
                        //         src= {this.source}
                        //         title="Vimeo video player" 
                        //         frameborder="0">
                        //     </iframe>
                        // </div>

                        // functional components
                        <VimeoPlayer source={this.source}></VimeoPlayer>
                }
                
            </div>
        );
    }
}