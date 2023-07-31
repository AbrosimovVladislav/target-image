package com.ptica.targetimage;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TargetImageByLandingApi {

  private final TargetImageByLandingOrchestrator orchestrator;

  @GetMapping("/test")
  public List<String> getTargetImageByLanding(String landingUrl){
    List<String> imageUrls = orchestrator.getImageByLink(landingUrl);
    return imageUrls;
  }

}
