import { Player } from './Player';

export interface MatchData {
  teamAMatchPoints: number;
  teamBMatchPoints: number;
  teamAPlayers: Player[];
  teamBPlayers: Player[];
}
