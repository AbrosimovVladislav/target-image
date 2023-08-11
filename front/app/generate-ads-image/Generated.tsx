import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';
import {useGeneratedImagesStore} from "@/storage/generated-images-store";

interface GeneratedProps {
  website: string,
  generationStatus?: string,
}

const Generated = ({website, generationStatus}: GeneratedProps) => {

  const promt = useGeneratedImagesStore(state => state.promt);
  const images = useGeneratedImagesStore(state => state.images);

  return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section className="flex flex-row">
          <div className="m-1">
            <Image
                src={images[0]}
                height={250}
                alt="Norway"
            />
            <Image
                src={images[1]}
                height={250}
                alt="Norway"
            />
          </div>
          <div className="m-1">
            <Image
                src={images[2]}
                height={250}
                alt="Norway"
            />
            <Image
                src={images[3]}
                height={250}
                alt="Norway"
            />
          </div>
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <div className="flex flex-row">
            <Text weight={500}>Website:</Text>
            <Text className="mx-2" color="teal" weight={600}>{website}</Text>
          </div>


          <Badge color="teal" variant="light">
            {generationStatus || 'Generated'}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {promt}
        </Text>

        <Button variant="light" color="teal" fullWidth mt="sm" radius="md">
          Download all images
        </Button>
      </Card>
  )
}

export default Generated;