import {Component,ViewChild, Renderer, ElementRef} from '@angular/core';
import {AboutComponent} from '../about/about.component';
import { LivroService } from '../service/livro.service';
import { Livro } from '../entity/livro';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {

	 @ViewChild('btnAdd') btnAdd:ElementRef;
	livros: Livro[] = [];
	selectedLivro: Livro= new Livro();
	private renderer: Renderer = null;

	constructor(private livroService: LivroService, private render:Renderer) {
		this.livros = livroService.getLivros();
		this.renderer = render;
	}

	public selectLivro(livro :Livro) {
		console.log(livro);
		this.selectedLivro = livro;
		let event = new MouseEvent('click', {bubbles: true});
    	this.renderer.invokeElementMethod(this.btnAdd.nativeElement, 'dispatchEvent', [event]);
	}

	public resetData() {
		this.selectedLivro = new Livro();
	}

	public saveLivro() {
		this.livroService.saveLivro(this.selectedLivro);
		this.resetData();
	}

	public deleteLivro(livro: Livro) {
		this.livroService.deleteLivro(livro);
	}
}
