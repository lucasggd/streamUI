package com.streamUI.model;

import lombok.*;

/**
 * @author lucas.dias
 */

@Data
public class SoccerTeam {

    private Long matchPoints;
    private String name;
    private String shortName;
    private String primaryColor;
    private String secondaryColor;

}
