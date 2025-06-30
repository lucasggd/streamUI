import { Component } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cs-ui',
  imports: [CommonModule],
  templateUrl: './cs-ui.component.html',
  styleUrl: './cs-ui.component.css',
})
export class CsUiComponent {
  private readonly destroy$ = new Subject();

  public matchData: any;

  constructor(private _webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // this.matchData = {};
    // this.matchData.teamAPlayers = [
    //   { health: 80, nickname: 'Josh A' },
    //   { health: 100, nickname: 'Second A' },
    //   { health: 100, nickname: 'Third A' },
    // ];
    // this.matchData.teamBPlayers = [
    //   { health: 100, nickname: 'Josh B' },
    //   { health: 100, nickname: 'Second B' },
    //   { health: 100, nickname: 'Third B' },
    // ];
    this._webSocketService.listen((matchData) => {
      this.matchData = matchData;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
