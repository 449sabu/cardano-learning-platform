import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface ContentsCardProps {
  contents: {
    title: string;
    description: string;
  };
}

const ContentsCard = ({ contents }: ContentsCardProps) => {
  return (
    <Card className="max-h-96">
      <CardHeader>
        <Image src="/sampleimage.png" alt="Image" width={500} height={500} />
        <CardTitle>{contents.title}</CardTitle>
        <CardDescription>{contents.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ContentsCard;
