import { Component } from '@angular/core';
import { ToastService } from 'simpletoast';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  meaning: number;
  constructor(ToastService: ToastService) {
    this.meaning = toastservice.getMeaning();
  }
}
