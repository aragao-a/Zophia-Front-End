import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';
import { AccordionTest } from './accordion-test/accordion-test';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TuiRoot,
    AccordionTest
    
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('zophia');
}
