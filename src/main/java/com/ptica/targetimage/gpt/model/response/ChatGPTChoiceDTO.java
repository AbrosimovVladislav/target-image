package com.ptica.targetimage.gpt.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatGPTChoiceDTO {

  private ChatGPTMessageDTO message;
}
