import { Component } from '@angular/core';
import {
  FormArray,
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
import { CsMatchData } from '../../interface/CsMatchData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cs-ui-admin',
  imports: [
    CommonModule,
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
  public form = new FormGroup({});

  constructor(private _webSocketService: WebSocketService) {
    this.form.addControl(`teamAMatchPoints`, new FormControl(0));
    this.form.addControl(`teamBMatchPoints`, new FormControl(0));
    this.addPlayers('A');
    this.addPlayers('B');
  }

  private addPlayers(team: string) {
    for (let i = 0; i < 5; i++) {
      this.form.addControl(`player${i}${team}Health`, new FormControl(100));
      this.form.addControl(
        `player${i}${team}Nickname`,
        new FormControl('Player')
      );
    }
  }

  update(): void {
    let obj: CsMatchData = {
      teamAMatchPoints: this.form.get('teamAMatchPoints')?.value ?? 0,
      teamBMatchPoints: this.form.get('teamBMatchPoints')?.value ?? 0,
      teamAPlayers: [],
      teamBPlayers: [],
    };

    for (let i = 0; i < 5; i++) {
      obj.teamAPlayers.push({
        health: this.form.get(`player${i}AHealth`)?.value ?? 100,
        nickname: this.form.get(`player${i}ANickname`)?.value ?? '',
      });

      obj.teamBPlayers.push({
        health: this.form.get(`player${i}BHealth`)?.value ?? 100,
        nickname: this.form.get(`player${i}BNickname`)?.value ?? '',
      });
    }

    this._webSocketService.sendData(obj, 'cs');
  }
}
