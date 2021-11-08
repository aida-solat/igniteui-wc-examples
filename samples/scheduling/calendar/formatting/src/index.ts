import { defineComponents, IgcCalendarComponent, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/bootstrap.css';

export class CalendarFormatting {

    private calendar: IgcCalendarComponent;
    private radios: NodeListOf<IgcRadioComponent>;

    constructor() {
        defineComponents(IgcCalendarComponent, IgcRadioComponent, IgcRadioGroupComponent);
        this.calendar = document.getElementById('calendar1') as IgcCalendarComponent;
        this.calendar.formatOptions = {
            month: 'short',
            weekday: 'short'
        };
        this.calendar.value = new Date();

        this.radios = document.querySelectorAll('igc-radio') as NodeListOf<IgcRadioComponent>;
        this.radios.forEach(radio => {
            radio.addEventListener('igcChange', () => {
                if (radio.checked) {
                    this.calendar.locale = radio.value;
                }
            });
        })
    }
}

new CalendarFormatting();
