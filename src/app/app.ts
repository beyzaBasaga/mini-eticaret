import {Component, signal} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ NgClass, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mini-eticaret');

  // @if örneği
  isLoggedIn = false;
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // @for örneği
  items = [
    { id: 1, name: 'Laptop', price: 15000 },
    { id: 2, name: 'Mouse', price: 300 },
    { id: 3, name: 'Klavye', price: 700 }
  ];

  // @switch örneği
  status: 'loading' | 'success' | 'error' | 'idle' = 'idle';
  setStatus(newStatus: 'loading' | 'success' | 'error' | 'idle') {
    this.status = newStatus;
  }

  //ngStyle örneği
  isActive = true;

  toggleActive()
  {
    this.isActive = !this.isActive;
  }
}
