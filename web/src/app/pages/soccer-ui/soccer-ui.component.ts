import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { WebSocketService } from '../../services/web-socket.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-soccer-ui',
  imports: [MatIconModule, UpperCasePipe],
  templateUrl: './soccer-ui.component.html',
  styleUrl: './soccer-ui.component.css',
})
export class SoccerUiComponent {
  private readonly destroy$ = new Subject();

  public matchData: any;

  constructor(private _webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this._webSocketService.listen((matchData) => {
      this.matchData = matchData;
    }, 'soccer');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
