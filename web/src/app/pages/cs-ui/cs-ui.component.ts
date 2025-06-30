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
    this._webSocketService.listen((matchData) => {
      this.matchData = matchData;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  transformHealthToWidth(health: number): number {
    return health > 100 ? 100 : health;
  }
}
