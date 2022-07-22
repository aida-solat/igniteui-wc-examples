import { defineComponents, IgcRatingComponent, IgcRatingSymbolComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcRatingComponent, IgcRatingSymbolComponent);
export class RatingBasic {
    constructor() {
    }
}

new RatingBasic();