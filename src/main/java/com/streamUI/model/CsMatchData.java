package com.streamUI.model;

import lombok.*;

import java.util.List;

/**
 * @author lucas.dias
 */

@Data
public class CsMatchData {

    private Long teamAMatchPoints;
    private Long teamBMatchPoints;
    private List<Object> teamAPlayers;
    private List<Object> teamBPlayers;

}
