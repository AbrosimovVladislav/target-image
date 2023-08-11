package com.ptica.targetimage.web.dto;

import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ImageGenerationDto {

  String promt;
  List<String> images;
}
