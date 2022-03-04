import {defineComponents, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcAvatarComponent, IgcButtonComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './ListStyling.css';

defineComponents(IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcAvatarComponent, IgcButtonComponent);
export class ListStyling{
    constructor() {
    }
}

new ListStyling();
