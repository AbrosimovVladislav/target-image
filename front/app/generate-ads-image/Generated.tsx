import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';

interface GeneratedProps {
  website: string,
  generationStatus?: string,
  promt: string
}

const promtExample = "n this prompt, [1] should be replaced with a random subject and [2] should be a short concise description about that subject. Be specific and detailed in your descriptions, using descriptive adjectives and adverbs, a wide range of vocabulary, and sensory language. Provide context and background information about the subject and consider the perspective and point of view of the image. Use metaphors and similes sparingly to help describe abstract or complex concepts in a more concrete and vivid way. Use concrete nouns and\n";

const Generated = ({website, generationStatus, promt}: GeneratedProps) => {
  return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section className="flex flex-row">
          <div className="m-1">
            <Image
                src="https://static.vecteezy.com/system/resources/previews/007/874/085/original/house-cleaning-logo-cleaning-service-business-logo-design-free-vector.jpg"
                height={250}
                alt="Norway"
            />
            <Image
                src="https://img.freepik.com/premium-vector/home-cleaning-logo-suitable-real-estate-cleaning-services_373791-1300.jpg?w=2000"
                height={250}
                alt="Norway"
            />
          </div>
          <div className="m-1">
            <Image
                src="https://i.pinimg.com/originals/1b/7f/e1/1b7fe1a68eb7ad8994de7f07165cf410.png"
                height={250}
                alt="Norway"
            />
            <Image
                src="https://media.istockphoto.com/id/1169402266/vector/house-cleaning-service-design-house-with-vacuum-cleaner-bucket-and-cleaning-products-vector.jpg?s=612x612&w=0&k=20&c=U5DIyBJDU3haAknYE7PImqKGPl91JbWCKABRhG6tr9Y="
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
          {promt || promtExample}
        </Text>

        <Button variant="light" color="teal" fullWidth mt="sm" radius="md">
          Download all images
        </Button>
      </Card>
  )
}

export default Generated;