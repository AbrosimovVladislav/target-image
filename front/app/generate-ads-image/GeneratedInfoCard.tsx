import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';
import {useGeneratedImagesStore} from "@/storage/generated-images-store";
import SImage from "@/components/common/SImage";

interface GeneratedProps {
  website: string,
  generationStatus?: string,
}

const GeneratedInfoCard = ({website, generationStatus}: GeneratedProps) => {

  const promt = useGeneratedImagesStore(state => state.promt);
  const images = useGeneratedImagesStore(state => state.images);

  return (
      <Card className="shadow-sm p-5 rounded-lg border-2">
        <Card.Section className="flex flex-row">
          <div className="m-1">
            <SImage src={images[0]} height={250}/>
            <SImage src={images[1]} height={250}/>
          </div>
          <div className="m-1">
            <SImage src={images[2]} height={250}/>
            <SImage src={images[3]} height={250}/>
          </div>
        </Card.Section>

        <Group className="mt-2 mb-5" position="apart">
          <div className="flex flex-row">
            <Text className="font-medium">Website:</Text>
            <Text className="mx-2 text-teal-500 font-semibold">{website}</Text>
          </div>


          <Badge className="text-teal-500">
            {generationStatus || 'Generated Info Card'}
          </Badge>
        </Group>

        <Text className="text-sm text-slate-500">
          {promt}
        </Text>

        <Button variant="light" color="teal" fullWidth mt="sm" radius="md">
          Download all images
        </Button>
      </Card>
  )
}

export default GeneratedInfoCard;