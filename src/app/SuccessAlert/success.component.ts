import {Component} from '@angular/core'

@Component({
    selector: 'app-success-alert',
    template: `
    <p>This is a Success Message</p>
    `,
    styles: [
        `
        p {
            color: green;
        }
        `
    ]
})
export class SuccessAlertComponent{

}