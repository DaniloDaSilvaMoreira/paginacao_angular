import { Component, OnInit } from '@angular/core';
import { Fabricante } from 'src/app/models/fabricante.model';
import { PageEvent } from '@angular/material/paginator';
import { FabricanteService } from 'src/app/services/fabricante.service';

@Component({
  selector: 'app-fabricante-list',
  templateUrl: './fabricante-list.component.html',
  styleUrls: ['./fabricante-list.component.css']
})
export class FabricanteListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'nome-column', 'ano-fundacao-column', 'acoes-column'];
  fabricantes: Fabricante[] = [];

  totalRegistros = 0;
  pageSize = 2;
  pagina = 0;
  filtro: string = "";

  constructor(private fabricanteService: FabricanteService) {}

  ngOnInit(): void {
    this.carregarFabricantes();
    this.carregarTotalRegistros();
  }

  carregarFabricantes() {

    // se existe dados no filtro
    if (this.filtro) {
      this.fabricanteService.findByNome(this.filtro, this.pagina, this.pageSize).subscribe(data => {
        this.fabricantes = data;
      });
    } else {
      // buscando todos os fabricantes
      this.fabricanteService.findAll(this.pagina, this.pageSize).subscribe(data => {
        this.fabricantes = data;
      });
    }
  }

  carregarTotalRegistros() {
    // se existe dados no filtro
    if (this.filtro) {
      this.fabricanteService.countByNome(this.filtro).subscribe(data => {
        this.totalRegistros = data;
      });
    } else {
      this.fabricanteService.count().subscribe(data => {
        this.totalRegistros = data;
      });
    }
  }

  excluir(fabricante: Fabricante) {

      if (fabricante.id != null) {

        this.fabricanteService.delete(fabricante).subscribe({
          next: (fabricanteCadastrado) => {
            this.ngOnInit();
          },
          error: (err) => {
            console.log('Erro ao excluir' + JSON.stringify(err));
          }
        })
      }
  }

  // Método para paginar os resultados
  paginar(event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarFabricantes();
  }

  aplicarFiltro() {
    this.carregarFabricantes();
    this.carregarTotalRegistros();
  }
}
