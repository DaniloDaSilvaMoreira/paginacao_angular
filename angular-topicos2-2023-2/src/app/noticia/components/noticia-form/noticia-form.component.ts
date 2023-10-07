import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia.model';
import { TopicoPrincipal } from 'src/app/models/topico-principal.enum';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private noticiaService: NoticiaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              ) {

    const noticia: Noticia = this.activatedRoute.snapshot.data['noticia'];
    this.formGroup = formBuilder.group({
      id:[(noticia && noticia.id)? noticia.id : null],
      titulo:[(noticia && noticia.titulo)? noticia.titulo : '', Validators.required],
      conteudo:[(noticia && noticia.conteudo)? noticia.conteudo : '', Validators.required],
      dataPublicacao:[(noticia && noticia.dataPublicacao)? noticia.dataPublicacao : '', Validators.required],
      autor:[(noticia && noticia.autor)? noticia.autor : '', Validators.required],
      topicoPrincipal:[(noticia && noticia.topicoPrincipal)? noticia.topicoPrincipal : '', Validators.required]
    })
  }

  salvar() {
    if (this.formGroup.valid) {
      const novaNoticia = this.formGroup.value;
      if (novaNoticia.id == null) {

        this.noticiaService.save(novaNoticia).subscribe({
          next: (noticiaCadastrado) => {
            this.router.navigateByUrl('/noticias/list');
          },
          error: (err) => {
            console.log('Erro ao salvar' + JSON.stringify(err));
          }
        })
      }
      else {

        this.noticiaService.update(novaNoticia).subscribe({
          next: (noticiaCadastrado) => {
            this.router.navigateByUrl('/noticias/list');
          },
          error: (err) => {
            console.log('Erro ao salvar' + JSON.stringify(err));
          }
        })
      }
    }
  }
}
