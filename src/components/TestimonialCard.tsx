
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-4 italic">
          "{text}"
        </blockquote>
        <footer className="font-semibold text-primary">— {name}</footer>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
