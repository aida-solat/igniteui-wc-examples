import {defineComponents, IgcSnackbarComponent, IgcButtonComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcSnackbarComponent, IgcButtonComponent);
export class SnackbarDisplayTime {
    constructor() {
    }
}

new SnackbarDisplayTime();
