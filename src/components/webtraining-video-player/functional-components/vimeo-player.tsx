//FUNCIÓN VIDEO VIMEO

import { FunctionalComponent, h } from "@stencil/core";

// necesitamos algo que nos represente los datos. Creamos una interface
interface VimeoPlayerProps {
    source: string;
}

// creamos una funcion que recibe un conjunto de props (source)
export const VimeoPlayer : FunctionalComponent<VimeoPlayerProps> = ({source}) => {

    return (
        <div>
            <h2>Vimeo</h2>
            <iframe width="560" height="315" 
                src= {source}
                title="Vimeo video player" 
                frameborder="0">
            </iframe>
        </div>
    );
};