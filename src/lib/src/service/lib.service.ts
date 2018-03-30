import { Injectable ,ElementRef} from '@angular/core';
// import * as Values from 'color'; 
export type Position = 'bottom' | 'top';
export type Status = "info" | "warning" | "danger" | "success";
export type Direction = 'rtl'|'ltr';
export type Align = 'right'|'left';


const states = {
	info:'#039BE5',
	warning:'#FFB300',
	danger:'#F4511E',
	success:'#388E3C'
}
export class Toast{
	text :string;
	position?:Position;
	duration?:number
	status?:Status | string;
	direction?:Direction;
	align?:Align;
	parent?:Element
	constructor(text :string,position:Position = 'bottom',duration:number = 5,status:Status|string = 'info',direction:Direction = 'ltr',align:Align = 'left'){
		this.text = text;
		this.position = position;
		this.duration = duration;
		this.status = status;
		this.direction = direction;
		this.align = align;
		if(document.querySelector('.toast-holder.'+this.position+'.'+this.align) == null){
			this.parent = document.createElement("DIV");
			this.parent.setAttribute('class','toast-holder '+this.position+' '+this.align)
			document.body.appendChild(this.parent)
		}else{
			this.parent = document.querySelector('.toast-holder.'+this.position+'.'+this.align)
		}
	}
}
@Injectable()
export class ToastService {
	constructor() {
	}
	private is_status(s:string){
		return  s === 'info' || s === 'danger' || s=== 'warning' || s === 'success'
	}
	private text_color(color:string){
		// let Values = require('values.js')
		let hexCode = color.replace('#', '');
		var c_r = parseInt(hexCode.substr(0, 2),16);
		var c_g = parseInt(hexCode.substr(2, 2),16);
		var c_b = parseInt(hexCode.substr(4, 2),16);
		let b =  (((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000 ) 
		return b < 148  ? 'white':'black';
	}
	present(config:any){
		if(!(config instanceof Toast))
		{
			config = new Toast(config.text,
				config.position || 'bottom',
				config.duration || 5,
				config.status || 'info',
				config.direction || 'ltr',
				config.align || 'left')			
		}
		let toast = document.createElement("DIV");
		toast.setAttribute('class','toast '+config.direction )
		let t = document.createTextNode(config.text)
		toast.appendChild(t)
		let color = this.is_status(config.status) ? states[config.status] : config.status
		document.body.appendChild(toast)
		toast.style.animationName ='rev' + config.align
		toast.style.animationDuration =  config.duration+'s'
		toast.style.backgroundColor = color
		toast.style.color = this.text_color(color)
		config.parent.appendChild(toast)
		setTimeout(function () {
			toast.parentElement.removeChild(toast);
		},config.duration*1001)
	}
	
}
