import { Component } from '@angular/core';

/**
 * Generated class for the CounterWrapperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'counter-wrapper',
    templateUrl: 'counter-wrapper.html'
})
export class CounterWrapperComponent {

    message: string;

    constructor() {
        console.log('Hello CounterWrapperComponent Component');
    }

    handleMessageEvent(ev) {
        this.message = ev.detail;
        console.log('Received event from component: ', this.message);
    }

}
