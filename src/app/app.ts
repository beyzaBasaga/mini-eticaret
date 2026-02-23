import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponent } from './my-first-component/my-first-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mini-eticaret');
}
