import { Player } from './Player';

export interface CsMatchData {
  teamAMatchPoints: number;
  teamBMatchPoints: number;
  teamAPlayers: Player[];
  teamBPlayers: Player[];
}
