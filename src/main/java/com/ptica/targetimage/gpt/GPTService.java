package com.ptica.targetimage.gpt;

import com.ptica.targetimage.gpt.client.ChatGPTClient;
import com.ptica.targetimage.gpt.model.request.ChatGPTRequest;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class GPTService {

  private final ChatGPTClient chatGPTClient;

  public String getPromtForImageGenerationAI(String landingConcept, String promtSchema, String mood,
      String aspectRatio, String colors) {
    log.info("Promt receiving started");
    String gptRequestContent = mergePromtSchemaAndLandingConcept(landingConcept, promtSchema, mood,
        aspectRatio, colors);
    ChatGPTRequest request = new ChatGPTRequest().gptRequestBody(gptRequestContent);
    ResponseEntity<String> response = chatGPTClient.callMock(request);
    String responseBody = response.getBody();
    log.info("Promt successfully received: <{}>", responseBody);
    return responseBody;
  }

  //ToDo to implement
  private String mergePromtSchemaAndLandingConcept(String landingConcept, String promtSchema,
      String mood,
      String aspectRatio, String colors) {
    return String.join(" ", landingConcept, promtSchema, mood, aspectRatio, colors);
  }
}
