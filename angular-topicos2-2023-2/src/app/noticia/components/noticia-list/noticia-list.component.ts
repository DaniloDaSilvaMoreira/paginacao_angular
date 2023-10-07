import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia.model';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'titulo-column', 'data-publicacao-column', 'autor-column', 'topico-principal-column', 'acoes-column'];
  noticias: Noticia[] = [];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiaService.findAll().subscribe(data => {

      this.noticias = data;
    });
  }

  excluir(noticia: Noticia) {

      if (noticia.id != null) {

        this.noticiaService.delete(noticia).subscribe({
          next: (noticiaCadastrado) => {
            this.ngOnInit();
          },
          error: (err) => {
            console.log('Erro ao excluir' + JSON.stringify(err));
          }
        })
      }
  }
}
