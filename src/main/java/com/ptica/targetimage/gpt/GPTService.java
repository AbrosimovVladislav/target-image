package com.ptica.targetimage.gpt;

import com.ptica.targetimage.gpt.client.ChatGPTClient;
import com.ptica.targetimage.gpt.model.request.ChatGPTRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class GPTService {

  private final ChatGPTClient chatGPTClient;

  public String getPromtForImageGenerationAI(String landingConcept, String promtSchema) {
    log.info("Promt receiving started");
    String gptRequestContent = mergePromtSchemaAndLandingConcept(landingConcept, promtSchema);
    ChatGPTRequest request = new ChatGPTRequest().gptRequestBody(gptRequestContent);
    ResponseEntity<String> response = chatGPTClient.call(request);
    String responseBody = response.getBody();
    log.info("Promt successfully received: <{}>", responseBody);
    return responseBody;
  }

  //ToDo to implement
  private String mergePromtSchemaAndLandingConcept(String landingConcept, String promtSchema){
    return "null";
  }
}
