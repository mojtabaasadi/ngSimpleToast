import { Injectable ,ElementRef} from '@angular/core';
type Position = 'bottom' | 'top';
type Status = "info" | "warning" | "danger" | "success";
type Direction = 'rtl'|'ltr';
type Align = 'right'|'left';


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
	constructor(text :string,position:Position = 'bottom',duration:number = 5,status:Status|string = 'info',direction:Direction = 'rtl',align:Align = 'left'){
		this.text = text;
		this.position = position;
		this.duration = duration;
		this.status = status;
		this.direction = direction;
		this.align = align;
		if(!this.parent){
			this.parent = document.createElement("DIV");
			this.parent.setAttribute('class','toast-holder '+this.position+' '+this.align)
			document.body.appendChild(this.parent)
		}
	}
}
@Injectable()
export class LibService {
	constructor() {
	}

	present(config:any){
		if(!(config instanceof Toast))
		{
			config = new Toast(config.text,
				config.position || 'bottom',
				config.duration || 5,
				config.status || 'info',
				config.direcion || 'ltr',
				config.align || 'left')			
		}
		let toast = document.createElement("DIV");
		toast.setAttribute('class','toast ' )
		let t = document.createTextNode(config.text)
		toast.appendChild(t)
		document.body.appendChild(toast)
		toast.style.animationName ='rev' + config.align
		toast.style.animationDuration =  config.duration+'s'
		toast.style.backgroundColor = states[config.status]
		config.parent.appendChild(toast)
		setTimeout(function () {
			toast.parentElement.removeChild(toast);
		},config.duration*1001)
	}
	
}
