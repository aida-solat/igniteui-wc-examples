import IgcCalendarComponent from 'igniteui-webcomponents/src/components/calendar/calendar';
import IgcRadioComponent from 'igniteui-webcomponents/src/components/radio/radio';
import 'igniteui-webcomponents/src/components/radio-group/radio-group';
import 'igniteui-webcomponents/src/components/radio/radio';
import 'igniteui-webcomponents/src/components/calendar/calendar';
import 'igniteui-webcomponents/src/styles/themes/material.css';

export class CalendarSize {

    private calendar: IgcCalendarComponent;
    private radios: NodeListOf<IgcRadioComponent>;

    constructor() {
        this.calendar = document.getElementById('calendar1') as IgcCalendarComponent;
        
        this.radios = document.querySelectorAll('igc-radio') as NodeListOf<IgcRadioComponent>;
        this.radios.forEach(radio => {
            radio.addEventListener('igcChange', () => {
                if (radio.checked) {
                    this.calendar.size = radio.value as any;
                }
            });
        })
    }
}

new CalendarSize();