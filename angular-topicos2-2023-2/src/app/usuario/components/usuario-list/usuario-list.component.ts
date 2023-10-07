import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'nome-column', 'cpf-column', 'email-column', 'login-column', 'telefones-column', 'perfil-column', 'acoes-column'];
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.findAll().subscribe(data => {

      this.usuarios = data;
    });
  }

  excluir(usuario: Usuario) {

      if (usuario.id != null) {

        this.usuarioService.delete(usuario).subscribe({
          next: (usuarioCadastrado) => {
            this.ngOnInit();
          },
          error: (err) => {
            console.log('Erro ao excluir' + JSON.stringify(err));
          }
        })
      }
  }
}
