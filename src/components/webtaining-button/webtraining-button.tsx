import { Component, h, Listen, Prop, State } from '@stencil/core';

@Component ({
    tag: 'webtraining-button',
    styleUrl: 'webtraining-button.css',
    shadow: true
})

export class WebtrainingButton {

    @Prop() value: string;
    // si cambiamos 'true' por 'false' le quitamos la clase
    @Prop() primary : boolean = false;

    // clases que se pueden modificar, y cuadno cambia hace que el componente tenga el estilo del template
    @State() disabled : boolean = false;
    // vamos a escuchar un eventos y cuando el evento pase se va a ejecutar el decorador 'disabled'. Como 'disabled' tiene el decorador 'State' se puede cambiar el estado de este
    @Listen('click')
        handleCLick() {
            this.disabled = true;
            // luego de 3s desaparece y vuelve a estar en el estado del principio
            setTimeout(()=> this.disabled = false ,3000)
    }
    
    render(): any {
        return (
            // si la propiedad 'primary' es verdadero agregamos la clase 'primary, si no añadimos un string básico'
            <button class={this.primary ? 'primary' : ''} disabled={this.disabled}>
                {this.value}
            </button>
        );
    }
}