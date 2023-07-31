package com.ptica.targetimage.gpt.model.request;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatGPTRequest {
  private String model;
  private Double temperature;
  private List<ChatGPTRequestMessageDTO> messages;

  public ChatGPTRequest gptRequestBody(String requestContent) {
    return new ChatGPTRequest(
        "gpt-3.5-turbo",
        0.7,
        List.of(new ChatGPTRequestMessageDTO(
            "user",
            requestContent
        ))
    );
  }
}
