import { Injectable } from '@angular/core';
import { CompatClient, Stomp, StompSubscription } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MatchData } from '../interface/MatchData';

export type ListenerCallBack = (message: any) => void;

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private connection: CompatClient | undefined = undefined;

  private subscription: StompSubscription | undefined;

  constructor() {
    this.connection = Stomp.client('ws://localhost:8080/connect-websocket');
    this.connection.connect({}, () => {});
  }

  public send(data: MatchData): void {
    if (this.connection && this.connection.connected) {
      this.connection.send('/update/data', {}, JSON.stringify(data));
    }
  }

  public listen(fun: ListenerCallBack): void {
    if (this.connection) {
      this.connection.connect({}, () => {
        this.subscription = this.connection!.subscribe(
          '/send/stats',
          (message) => fun(JSON.parse(message.body))
        );
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
