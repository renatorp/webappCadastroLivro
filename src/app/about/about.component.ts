import {Component, Input} from '@angular/core';
import { Livro } from '../entity/livro';

@Component({
    selector: 'about',
    template: require('./about.component.html')
})

export class AboutComponent {
	@Input() public selectedLivro: Livro = null
}
