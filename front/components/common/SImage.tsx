import {Image} from '@mantine/core';

interface SImageProps {
  src: string,
  height: number,
  alt?: string
}

const SImage = ({src, height, alt}: SImageProps) => {

  return (
      <Image
          src={src}
          height={height}
          alt={alt || "img-" + Math.floor(Math.random() * (10000 - 100) + 100)}
      />
  )

}

export default SImage;