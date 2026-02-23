import {Component, computed, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // SET örneği
  countSet = signal(0);
  incrementSet() {
    this.countSet.set(this.countSet() + 1);
  }

  // UPDATE örneği
  countUpdate = signal(0);
  incrementUpdate() {
    this.countUpdate.update(value => value + 1);
  }

  // COMPUTED örneği
  price = signal(100);
  taxRate = signal(0.18);
  total = computed(() => this.price() * (1 + this.taxRate()));

  // EFFECT örneği
  name = signal('Angular');
  nameInput = '';

  constructor() {
    effect(() => {
      console.log('Name changed:', this.name());
    });
  }

  changeName() {
    this.name.set(this.nameInput);
  }
}





