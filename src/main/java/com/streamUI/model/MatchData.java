package com.streamUI.model;

import java.util.List;

/**
 * @author lucas.dias
 */

public class MatchData {
    private Long teamAMatchPoints;
    private Long teamBMatchPoints;
    private List<Object> teamAPlayers;
    private List<Object> teamBPlayers;

    public Long getTeamAMatchPoints() {
        return teamAMatchPoints;
    }

    public void setTeamAMatchPoints(Long teamAMatchPoints) {
        this.teamAMatchPoints = teamAMatchPoints;
    }

    public Long getTeamBMatchPoints() {
        return teamBMatchPoints;
    }

    public void setTeamBMatchPoints(Long teamBMatchPoints) {
        this.teamBMatchPoints = teamBMatchPoints;
    }

    public List<Object> getTeamAPlayers() {
        return teamAPlayers;
    }

    public void setTeamAPlayers(List<Object> teamAPlayers) {
        this.teamAPlayers = teamAPlayers;
    }

    public List<Object> getTeamBPlayers() {
        return teamBPlayers;
    }

    public void setTeamBPlayers(List<Object> teamBPlayers) {
        this.teamBPlayers = teamBPlayers;
    }
}
