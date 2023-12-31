package com.ptica.targetimage;

import com.ptica.targetimage.gpt.GPTService;
import com.ptica.targetimage.service.ImageGenerationAIService;
import com.ptica.targetimage.service.PluginService;
import com.ptica.targetimage.service.PromtSchemaGenerator;
import com.ptica.targetimage.service.S3Service;
import com.ptica.targetimage.web.dto.ImageGenerationDto;
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

  public ImageGenerationDto getImageByLink(String landingUrl, String mood, String aspectRatio, String colors) {
    String landingConcept = pluginService.getLandingConceptByPlugin(landingUrl);
    String promt = gptService.getPromtForImageGenerationAI(landingConcept,
        promtSchemaGenerator.getPromt(), mood, aspectRatio, colors);
    List<String> images = imageGenerationAIService.getImagesByPromt(promt);
    List<String> imageUrls = s3Service.saveImagesToStorageMock(images);
    return ImageGenerationDto.builder().promt(promt).images(imageUrls).build();
  }
}
