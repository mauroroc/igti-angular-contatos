import { Component, OnInit } from '@angular/core';
import { Player, PlayersService } from '../players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];
  constructor(private _service: PlayersService) { }

  ngOnInit(): void {
    this._service.listAll().subscribe(items => {
      this.players = items;
    });
  }

  deletePlayer(player: Player) {
    this._service.delete(player.id).subscribe(item => {
      const index = this.players.indexOf(player);
      this.players.splice(index, 1);
    });
  }

}
