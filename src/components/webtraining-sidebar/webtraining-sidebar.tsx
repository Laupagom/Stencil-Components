import { Component, h, Method, Prop} from '@stencil/core';

@Component ({
    tag: 'webtraining-sidebar',
    styleUrl: 'webtraining-sidebar.css',
    shadow: true
})

export class WebtrainingSidebar {

    // definimos el atributo open-sidebar
    @Prop({reflect: true, mutable: true}) sidebarOpen: boolean;
    // creamos la funcion para llevarnos al script de js
    
    //decorador que ayuda a propagar a la función, sin el la Function (public open()) no funcionará
    @Method()
    public open() {
        this.sidebarOpen = true;
    }

    render() {
        return (
            <div>
                {/*  creación de un ARRAY, los elementos se separan por coma */}
                <div class="backdrop">
                    <div>hola</div>
                </div>,

                <aside>
                    <header class="header-sidebar">
                        <span>x</span>
                        <h3>Título del sidebar</h3>
                    </header>
                    {/* etiqueta que muestra la infomración que deja el usuario */}
                    <slot></slot>
                </aside>
            </div>
        )
    }
}
// https://www.youtube.com/watch?v=P-VPH13vz5k&list=PLu0Q5IRxhi4XTAd3l1gN7ybhP4sNIvAaM&index=19