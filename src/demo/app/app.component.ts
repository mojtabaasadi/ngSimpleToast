import { Component } from '@angular/core';
import { ToastService ,Toast} from 'quickstart-lib';

@Component({
	selector: 'demo-app',
	templateUrl: './app.component.html'
})

export class AppComponent {
	meaning: number = 24;
	constructor(toastservice: ToastService) {
		let toast = new Toast('This is a toast','top',7,'#F5F5F5')
		toastservice.present(toast)
		toastservice.present({duration:13,text:'another toast',status:'#A1887F'})
		toastservice.present({duration:9,text:'another toast',status:'#A1887F'})
		toastservice.present({text:'این یک تست است',status:'success',align:'right'
			,direction:'rtl',duration:8})
		toastservice.present({text:'some other toast',status:'success',position:'top',align:'right',duration:6})
	}
	
}
