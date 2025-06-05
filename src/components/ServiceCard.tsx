
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, price, duration, features }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-primary/20 hover:border-primary/40">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-serif text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="text-center space-y-1">
          <div className="text-2xl font-bold text-primary">{price}</div>
          <div className="text-sm text-muted-foreground">{duration}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full">Book This Reading</Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
