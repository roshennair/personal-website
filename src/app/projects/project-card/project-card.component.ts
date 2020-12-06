import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements AfterViewInit {
	@Input() categories: string[];
	@Input() description: string;
	@Input() image: string;
	@Input() name: string;
	@Input() repository: string;
	@Input() status: string;
	@ViewChild('statusEl') statusEl: ElementRef;

	constructor(private renderer: Renderer2) { }

	ngAfterViewInit(): void {
		const newClass = this.status === 'Ongoing' ? 'ongoing' : 'completed'
		this.renderer.addClass(this.statusEl.nativeElement, newClass);
	}
}
