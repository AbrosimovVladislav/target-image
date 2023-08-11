package com.ptica.targetimage.web;

import com.ptica.targetimage.TargetImageByLandingOrchestrator;
import com.ptica.targetimage.web.dto.ImageGenerationDto;
import com.ptica.targetimage.web.dto.request.GetImageByUrlRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/image-by-url")
@RequiredArgsConstructor
public class TargetImageByLandingApi {

  private final TargetImageByLandingOrchestrator orchestrator;

  @CrossOrigin
  @PostMapping("/")
  public ResponseEntity<ImageGenerationDto> getTargetImageByLanding(
      @RequestBody GetImageByUrlRequest request) {
    ImageGenerationDto response = orchestrator.getImageByLink(
        request.getUrl(), request.getMood(), request.getAspectRatio(), request.getColors());
    return ResponseEntity.ok(response);
  }

}
