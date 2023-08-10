package com.ptica.targetimage.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PluginService {

  //ToDo to implement
  public String getLandingConceptByPlugin(String landingUrl) {
    log.info("Concept receiving started");
    log.info("Concept successfully received");
    return "Concept Mock";
  }
}
