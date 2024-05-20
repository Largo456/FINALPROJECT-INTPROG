import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-schedule-appointment',
    templateUrl: './schedule-appointment.component.html',
    styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent {
    appointment = {
        firstName: '',
        lastName: '',
        middleName: '', 
        phone: '',
        email: '',
        date: '',
        time: '',
        paymentMethod: ''
    };

    constructor(private http: HttpClient) {}

    onSubmit() {
        this.http.post('/api/appointments', this.appointment).subscribe(response => {
            console.log('Appointment scheduled successfully', response);
        });
    }
}
