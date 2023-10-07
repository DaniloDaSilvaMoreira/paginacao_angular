import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'nome-column', 'ano-lancamento-column', 'developer-column', 'genero-column', 'plataforma-column', 'preco-column', 'acoes-column'];
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.findAll().subscribe(data => {

      this.games = data;
    });
  }

  excluir(game: Game) {

      if (game.id != null) {

        this.gameService.delete(game).subscribe({
          next: (gameCadastrado) => {
            this.ngOnInit();
          },
          error: (err) => {
            console.log('Erro ao excluir' + JSON.stringify(err));
          }
        })
      }
  }
}
