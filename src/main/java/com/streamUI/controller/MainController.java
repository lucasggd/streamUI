package com.streamUI.controller;

import com.streamUI.model.CsMatchData;
import com.streamUI.model.SoccerMatchData;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

/**
 * @author lucas.dias
 */

@Controller
public class MainController {

    @MessageMapping("/cs/data")
    @SendTo("/send/cs/stats")
    public CsMatchData updateCsData(CsMatchData csMatchData) {
        return csMatchData;
    }

    @MessageMapping("/soccer/data")
    @SendTo("/send/soccer/stats")
    public SoccerMatchData updateSoccerData(SoccerMatchData soccerMatchData) {
        return soccerMatchData;
    }

}
