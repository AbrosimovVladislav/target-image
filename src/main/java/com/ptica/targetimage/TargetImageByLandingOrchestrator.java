package com.ptica.targetimage;

import com.ptica.targetimage.gpt.GPTService;
import com.ptica.targetimage.service.ImageGenerationAIService;
import com.ptica.targetimage.service.PluginService;
import com.ptica.targetimage.service.PromtSchemaGenerator;
import com.ptica.targetimage.service.S3Service;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class TargetImageByLandingOrchestrator {

  private final PluginService pluginService;
  private final GPTService gptService;
  private final PromtSchemaGenerator promtSchemaGenerator;
  private final ImageGenerationAIService imageGenerationAIService;
  private final S3Service s3Service;

  public List<String> getImageByLink(String landingUrl) {
    String landingConcept = pluginService.getLandingConceptByPlugin(landingUrl);
    String promt = gptService.getPromtForImageGenerationAI(landingConcept,
        promtSchemaGenerator.getPromt());
    List<String> images = imageGenerationAIService.getImagesByPromt(promt);
    List<String> imageUrls = s3Service.saveImagesToStorage(images);
    return imageUrls;
  }
}
