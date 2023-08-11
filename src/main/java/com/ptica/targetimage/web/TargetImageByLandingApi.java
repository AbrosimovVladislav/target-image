package com.ptica.targetimage.web;

import com.ptica.targetimage.TargetImageByLandingOrchestrator;
import com.ptica.targetimage.web.request.GetImageByUrlRequest;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

  @GetMapping("/test")
  public List<String> getTargetImageByLanding(String landingUrl) {
    List<String> imageUrls = orchestrator.getImageByLink(landingUrl, "", "", "");
    return imageUrls;
  }

  @CrossOrigin
  @PostMapping("/")
  public List<String> getTargetImageByLanding(@RequestBody GetImageByUrlRequest request) {
    List<String> imageUrls = orchestrator.getImageByLink(
        request.getUrl(), request.getMood(), request.getAspectRatio(), request.getColors());
    return imageUrls;
  }

}
