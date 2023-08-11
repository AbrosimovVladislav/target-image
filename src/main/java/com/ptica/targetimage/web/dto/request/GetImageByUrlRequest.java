package com.ptica.targetimage.web.dto.request;

import lombok.Data;

@Data
public class GetImageByUrlRequest {

  private String url;
  private String mood;
  private String aspectRatio;
  private String colors;

}
