import { Component, h, Prop } from '@stencil/core';

@Component ({
    tag: 'webtraining-personal-card',
    styleUrl: 'webtraining-personal-card.css',
    shadow: true
})

export class WebtrainingPersonalCard {

    @Prop() firstName: string = "" ;
    @Prop() lastName: string = "" ;
    @Prop() rol: string = "";
    @Prop() photo: string = "" ;
    @Prop() resume: string = "" ;
    

    render() {
        return (
            <div class="b-personal-card-box">
                <div class="b-personal-card">
                    <div class="b-personal-card__content">
                        <div class="b-personal-card__photo-container">
                            <img class="b-perdonal-card__photo" src={this.photo} alt="Kim Wright" />
                        </div>

                        <h2 class="b-personal-card__full-name">
                            {/* Kim Wright para hacerlo dinámico*/}
                            {this.firstName} {this.lastName}
                        </h2>

                        <h3  class="b-personal-card__rol">
                            {this.rol}
                        </h3>

                        <div class="b-personal-card__resume">
                            {this.resume}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}