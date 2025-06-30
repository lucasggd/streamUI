package com.streamUI.controller;

import com.streamUI.model.MatchData;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

/**
 * @author lucas.dias
 */

@Controller
public class MainController {

    @MessageMapping("/data")
    @SendTo("/send/stats")
    public MatchData processMessage(MatchData matchData) {
        return matchData;
    }

}
