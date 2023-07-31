package com.ptica.targetimage.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class S3Service {

  private final AmazonS3 s3Client;

  private static final String IMAGE_CONTENT_TYPE = "image/png";

  @Value("${do.spaces.bucket}")
  private String doSpaceBucket;

  @Value("${do.spaces.endpoint}")
  private String doSpaceEndpoint;

  public List<String> saveImagesToStorage(List<String> images) {
    log.info("Images saving started");
    List<String> imageUrls = images.stream()
        .map(image -> saveImageToStore(image, image))
        .collect(Collectors.toList());
    log.info("Images successfully saved");
    return imageUrls;
  }

  public String saveImageToStore(String srcImageUrl, String imgName) {
    ObjectMetadata metadata = new ObjectMetadata();
    metadata.setContentType(IMAGE_CONTENT_TYPE);

    try {
      var url = new URL(srcImageUrl);
      s3Client.putObject(
          new PutObjectRequest(doSpaceBucket, imgName, url.openStream(), metadata)
              .withCannedAcl(CannedAccessControlList.PublicRead));
    } catch (Exception e) {
      log.error("Image downloading failed for product image: " + imgName);
      e.printStackTrace();
    }
    String url = "https://" + doSpaceBucket + "." + doSpaceEndpoint + "/" + imgName;
    log.info("Image successfully saved to S3. Image URL:<{}>", url);
    return url;
  }

}