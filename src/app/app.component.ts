import {Component, OnInit} from '@angular/core';
import { LivroService } from './service/livro.service';

import '../styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    providers: [LivroService]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
