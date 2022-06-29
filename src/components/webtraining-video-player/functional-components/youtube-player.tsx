//FUNCIÓN VIDEO VIMEO

import { FunctionalComponent, h } from "@stencil/core";

// necesitamos algo que nos represente los datos. Creamos una interface
interface YouTubePLayerProps {
    source: string;
}

// creamos una funcion que recibe un conjunto de props (source)
export const YouTubePlayer : FunctionalComponent<YouTubePLayerProps> = ({source}) => {

    return (
        <div>
            <h2>Youtube</h2>
                <iframe width="560" height="315" 
                    src= {source}
                    title="YouTube video player" 
                    frameborder="0">
                </iframe>
        </div>
    );
};