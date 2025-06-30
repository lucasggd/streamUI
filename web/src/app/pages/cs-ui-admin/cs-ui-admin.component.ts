import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WebSocketService } from '../../services/web-socket.service';
import { MatchData } from '../../interface/MatchData';

@Component({
  selector: 'app-cs-ui-admin',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cs-ui-admin.component.html',
  styleUrl: './cs-ui-admin.component.css',
})
export class CsUiAdminComponent {
  public form = new FormGroup({
    teamAMatchPoints: new FormControl(0),
    teamBMatchPoints: new FormControl(0),
    player1AHealth: new FormControl(100),
    player1ANickname: new FormControl(''),
  });

  constructor(private _webSocketService: WebSocketService) {}

  update(): void {
    let obj: MatchData = {
      teamAMatchPoints: this.form.get('teamAMatchPoints')?.value ?? 0,
      teamBMatchPoints: this.form.get('teamBMatchPoints')?.value ?? 0,
      teamAPlayers: [
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
      ],
      teamBPlayers: [
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
        {
          health: this.form.get('player1AHealth')?.value ?? 100,
          nickname: this.form.get('player1ANickname')?.value ?? '',
        },
      ],
    };

    this._webSocketService.send(obj);
  }
}
