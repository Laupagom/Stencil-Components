import { Component, h} from '@stencil/core';

@Component ({
    tag: 'webtraining-sidebar-option',
    styleUrl: 'webtraining-sidebar-option.css',
    shadow: true
})

export class WebtrainingSidebarOption {

    render() {
        return (
            <div class="sidebar-option">
                <button>Opción del sidebar</button>
                <aside>
                    <slot></slot>
                </aside>
            </div>
        )
    }
}