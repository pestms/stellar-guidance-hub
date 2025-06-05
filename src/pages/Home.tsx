
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Moon, Sun, Stars } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The birth chart reading was incredibly accurate and insightful. It helped me understand myself on a deeper level.",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "The career guidance session gave me the clarity I needed to make important life decisions. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma L.",
      text: "Professional, compassionate, and amazingly intuitive. The relationship reading was spot on.",
      rating: 5
    }
  ];

  const featuredServices = [
    {
      icon: Sun,
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint and life purpose",
      price: "$120"
    },
    {
      icon: Moon,
      title: "Love & Relationships",
      description: "Explore compatibility and relationship dynamics",
      price: "$95"
    },
    {
      icon: Stars,
      title: "Career Guidance",
      description: "Align your career with your cosmic calling",
      price: "$85"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center cosmic-gradient stars-bg">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Unlock the Mysteries
            <span className="block text-accent">of Your Stars</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional astrology readings to illuminate your path, relationships, and life purpose through ancient cosmic wisdom.
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-black">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our most popular astrology readings, each designed to provide deep insights into different aspects of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-float">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button asChild className="w-full">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gradient mb-6">
                Meet Your Astrologer
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience in astrology and spiritual guidance, I combine traditional astrological wisdom with modern insights to help you navigate life's challenges and opportunities.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My approach is compassionate, intuitive, and deeply rooted in the belief that everyone deserves to understand their cosmic blueprint and live in alignment with their highest potential.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                  alt="Celestial background" 
                  className="w-full h-full object-cover rounded-full opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover how astrology has transformed the lives of those who sought cosmic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Discover Your Cosmic Path?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Book your personalized astrology reading today and begin your journey of self-discovery and cosmic alignment.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-black">
            <Link to="/contact">
              Book Your Reading Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
