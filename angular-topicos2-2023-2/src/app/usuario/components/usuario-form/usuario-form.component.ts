import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone } from 'src/app/models/telefone.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TelefoneDialogComponent } from '../telefone-dialog/telefone-dialog.component';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {

  formGroup: FormGroup;
  tableColumns: string[] = ['codigo-area-column', 'numero-column', 'acoes-column'];

  telefones: Telefone[] = [];

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {

    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];
    this.formGroup = formBuilder.group({
      id:[(usuario && usuario.id)? usuario.id : null],
      nome:[(usuario && usuario.nome)? usuario.nome : '', Validators.required],
      cpf:[(usuario && usuario.cpf)? usuario.cpf : '', Validators.required],
      email:[(usuario && usuario.email)? usuario.email : '', Validators.required],
      login:[(usuario && usuario.login)? usuario.login : '', Validators.required],
      senha:[(usuario && usuario.senha)? usuario.senha : '', Validators.required],
      perfil:[(usuario && usuario.perfil)? usuario.perfil : '', Validators.required],
      telefones:[(usuario && usuario.telefones)? null : '', Validators.required]
    })
  }

  addTelefone() {

    if (this.telefones == null) {

      this.telefones = [];
    }

    const dialogRef = this.dialog.open(TelefoneDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.telefones.push(result);
      }
    });
  }

  removerTelefone(telefone: Telefone) {

    if (telefone.id != null) {

      this.telefones.splice(this.telefones.indexOf(telefone), 1);
    }
  }

  salvar() {
    if (this.formGroup.valid) {
      const novoUsuario = this.formGroup.value;
      if (novoUsuario.id == null) {

        this.usuarioService.save(novoUsuario).subscribe({
          next: (usuarioCadastrado) => {
            this.router.navigateByUrl('/usuarios/list');
          },
          error: (err) => {
            console.log('Erro ao salvar' + JSON.stringify(err));
          }
        })
      }
      else {

        this.usuarioService.update(novoUsuario).subscribe({
          next: (usuarioCadastrado) => {
            this.router.navigateByUrl('/usuarios/list');
          },
          error: (err) => {
            console.log('Erro ao salvar' + JSON.stringify(err));
          }
        })
      }
    }
  }
}
