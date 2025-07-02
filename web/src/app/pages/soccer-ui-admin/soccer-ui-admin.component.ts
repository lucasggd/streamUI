import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WebSocketService } from '../../services/web-socket.service';
import { SoccerMatchData } from '../../interface/SoccerMatchData';

@Component({
  selector: 'app-soccer-ui-admin',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './soccer-ui-admin.component.html',
  styleUrl: './soccer-ui-admin.component.css',
})
export class SoccerUiAdminComponent {
  public form = new FormGroup({});

  constructor(private _webSocketService: WebSocketService) {
    this.form.addControl(`teamAName`, new FormControl('Team A'));
    this.form.addControl(`teamAShortName`, new FormControl('TMA'));
    this.form.addControl(`teamAPrimaryColor`, new FormControl(''));
    this.form.addControl(`teamASecondaryColor`, new FormControl(''));
    this.form.addControl(`teamAMatchPoints`, new FormControl(0));

    this.form.addControl(`teamBName`, new FormControl('Team B'));
    this.form.addControl(`teamBShortName`, new FormControl('TMB'));
    this.form.addControl(`teamBPrimaryColor`, new FormControl(''));
    this.form.addControl(`teamBSecondaryColor`, new FormControl(''));
    this.form.addControl(`teamBMatchPoints`, new FormControl(0));
  }

  update(): void {
    let obj: SoccerMatchData = {
      teamA: {
        name: this.form.get('teamAName')?.value ?? '',
        shortName: this.form.get('teamAShortName')?.value ?? '',
        primaryColor: this.form.get('teamAPrimaryColor')?.value ?? '',
        secondaryColor: this.form.get('teamASecondaryColor')?.value ?? '',
        matchPoints: this.form.get('teamAMatchPoints')?.value ?? 0,
      },
      teamB: {
        name: this.form.get('teamBName')?.value ?? '',
        shortName: this.form.get('teamBShortName')?.value ?? '',
        primaryColor: this.form.get('teamBPrimaryColor')?.value ?? '',
        secondaryColor: this.form.get('teamBSecondaryColor')?.value ?? '',
        matchPoints: this.form.get('teamBMatchPoints')?.value ?? 0,
      },
    };
    this._webSocketService.sendData(obj, 'soccer');
  }

  score(team: 'a' | 'b'): void {
    const controlName = `team${team.toUpperCase()}MatchPoints`;
    const control = this.form.get(controlName) as FormControl<number>;
    control.setValue((control.value ?? 0) + 1);

    this.update();
  }
}
