import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mini-eticaret');

  userName: string = 'Angular';
  fiyat: string = '150';
  profileImage: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  count: number = 0;
  increase() {
    this.count++;
  }

  userName2: string = 'Angular';
}
