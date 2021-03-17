import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.css']
})
export class PlayerUpdateComponent implements OnInit {

  playerForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    posicao: new FormControl('', Validators.required)
  });
  id: number;

  constructor(private _service: PlayersService, private _router: Router, private _actualRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._actualRoute.paramMap.subscribe(item => {
      this.id = parseInt(item.get('id'));
      this._service.list(this.id).subscribe(item => {
        this.playerForm.reset(item);
      });
    });

  }

  updatePlayer() {
    this._service.update({ id: this.id, ...this.playerForm.value}).subscribe(item => {
      this.playerForm.reset();
      this._router.navigate(['/players'])
    });
  }

}
