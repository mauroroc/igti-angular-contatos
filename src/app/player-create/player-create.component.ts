import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent {

  playerForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    posicao: new FormControl('', Validators.required)
  });

  constructor(private _service: PlayersService, private _router: Router) { }

  createPlayer(): void {
    this._service.create(this.playerForm.value).subscribe(item => {
      this._router.navigate(['/players'])
    });    
  }

}
