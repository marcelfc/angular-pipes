import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    search = '';
    items = ['vestibulum', 'vestibulum', 'leo', 'a', 'lectus'];
}
