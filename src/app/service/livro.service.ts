import { Injectable }    from '@angular/core';
import { Livro } from '../entity/livro';

@Injectable()
export class LivroService {
	nextId: number = 1;
	livros: Livro[] = [];
l: Livro;
	getLivros(): Livro[] {
	     return this.livros;
	}

	saveLivro(livro: Livro) {
		if (livro.id) {
			for(var l of this.livros){
				if (l.id === livro.id) {
					l.nome = livro.nome;
					l.isbn = livro.isbn;
					l.autores = livro.autores;
					l.criticas = livro.criticas;
					l.ano = livro.ano;
					l.editora = livro.editora;
				}
			}
		} else {
			livro.id = this.nextId;
			this.nextId = this.nextId +1;
			console.log('Id livro: ' + livro.id);
			this.livros.push(livro);
		}
	}

	deleteLivro(livro: Livro) {
	console.log(this.livros.length);
	console.log(livro.id);
		for(var o of this.livros){
			var i = this.livros.indexOf(o);
			console.log(this.livros[i]);
			if (this.livros[i].id == livro.id) {
				this.livros.splice(i, 1);
				console.log(i);
			}
			console.log('foi');
		}
	}
}