import { Component } from '@angular/core';
import { LibService ,Toast} from 'quickstart-lib';

@Component({
	selector: 'demo-app',
	templateUrl: './app.component.html'
})

export class AppComponent {
	meaning: number = 24;
	constructor(libService: LibService) {
		let toast = new Toast('ssss','top',7,'warning')
		let toast1 = new Toast('sssdds','top')
		libService.present(toast)
		setTimeout(function () {
		libService.present(toast)
			// body...
		},7000)
		libService.present({text:'hi'})
	}
	
}
