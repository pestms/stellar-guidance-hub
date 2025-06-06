import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Moon,
  Sun,
  Stars,
  Sparkles,
  Zap,
  Target,
  Compass,
} from "lucide-react";
import Gemini from "../../public/Gemini.png";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The birth chart reading was incredibly accurate and insightful. It helped me understand myself on a deeper level.",
      rating: 5,
    },
    {
      name: "Michael R.",
      text: "The career guidance session gave me the clarity I needed to make important life decisions. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma L.",
      text: "Professional, compassionate, and amazingly intuitive. The relationship reading was spot on.",
      rating: 5,
    },
  ];

  const featuredServices = [
    {
      icon: Sun,
      title: "Birth Chart Reading",
      description: "Discover your cosmic blueprint and life purpose",
      price: "$120",
    },
    {
      icon: Moon,
      title: "Love & Relationships",
      description: "Explore compatibility and relationship dynamics",
      price: "$95",
    },
    {
      icon: Stars,
      title: "Career Guidance",
      description: "Align your career with your cosmic calling",
      price: "$85",
    },
  ];

  const energyInsights = [
    {
      icon: Sparkles,
      title: "Planetary Influence",
      description: "How celestial bodies shape your personality and life path",
    },
    {
      icon: Zap,
      title: "Name Numerology",
      description: "The hidden power and vibrations within your name",
    },
    {
      icon: Target,
      title: "Timing & Cycles",
      description: "Understanding the best moments for major life decisions",
    },
    {
      icon: Compass,
      title: "Life Direction",
      description: "Finding clarity and purpose through cosmic guidance",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Enhanced Hero Section with more stars/circles */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 cosmic-gradient">
          <div className="absolute inset-0 stars-bg animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-80 left-20 w-2 h-2 bg-white rounded-full animate-float opacity-60" style={{ animationDelay: "5s" }}></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 right-40 w-2 h-2 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute top-80 right-1/3 w-3 h-3 bg-white rounded-full animate-float opacity-30" style={{ animationDelay: "1.5s" }}></div>
          
          {/* New floating elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2.5s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float opacity-70" style={{ animationDelay: "3.5s" }}></div>
          <div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "4s" }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-white rounded-full animate-float opacity-60" style={{ animationDelay: "0.7s" }}></div>
          <div className="absolute top-1/2 left-10 w-1 h-1 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: "1.2s" }}></div>
          <div className="absolute top-2/3 right-10 w-2 h-2 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: "2.7s" }}></div>
          <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-white rounded-full animate-float opacity-80" style={{ animationDelay: "3.2s" }}></div>
          <div className="absolute top-10 right-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: "4.2s" }}></div>
        </div>

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Unlock the Mysteries
            <span className="block text-accent animate-pulse">
              of Your Stars
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Professional astrology readings to illuminate your path,
            relationships, and life purpose through ancient cosmic wisdom.
          </p>
          <div
            className="space-x-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-info border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Understanding Your Energy Section - Redesigned with centered title and better layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-accent/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Title */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-2">
              Why Energy Readings
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl text-gradient">
              Transform Lives
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Text */}
            <div className="animate-fade-in">
              <div className="space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed">
                  Every person carries unique energetic frequencies that
                  influence their life path. These invisible forces shape our
                  relationships, career choices, and personal growth
                  opportunities.
                </p>

                <p className="leading-relaxed">
                  Your birth chart reveals the cosmic blueprint of your soul's
                  journey, while numerology uncovers the hidden meanings in your
                  name and important dates. Together, they provide profound
                  insights into your true nature.
                </p>

                <p className="leading-relaxed">
                  By understanding these energetic patterns, you can make
                  aligned decisions, recognize optimal timing for major changes,
                  and tap into your highest potential.
                </p>

                <p className="leading-relaxed font-medium text-primary">
                  Whether seeking clarity in love, career direction, or
                  spiritual growth, these ancient wisdom traditions offer
                  practical guidance for modern life challenges.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="relative animate-fade-in order-first lg:order-last"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 aspect-[4/3]">
                <img
                  src={Gemini}
                  alt="Cosmic energy visualization representing celestial wisdom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/20"></div>

                {/* Overlay Content */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <h3 className="font-serif text-2xl font-bold mb-3">
                        Cosmic Wisdom
                      </h3>
                      <p className="text-sm opacity-90">
                        Ancient knowledge meets modern insights to guide your
                        journey
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float opacity-80"></div>
              <div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-float opacity-60"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-3 w-4 h-4 bg-white rounded-full animate-float opacity-70"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Energy Insights Cards - Arranged in 2x2 Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {energyInsights.map((insight, index) => (
              <div
                key={index}
                className="p-5 bg-white/70 rounded-lg border border-primary/10 hover:shadow-md transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <insight.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600">{insight.description}</p>
              </div>
            ))}
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
              Choose from our most popular astrology readings, each designed to
              provide deep insights into different aspects of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-float">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
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
                With over 15 years of experience in astrology and spiritual
                guidance, I combine traditional astrological wisdom with modern
                insights to help you navigate life's challenges and
                opportunities.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My approach is compassionate, intuitive, and deeply rooted in
                the belief that everyone deserves to understand their cosmic
                blueprint and live in alignment with their highest potential.
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
              Discover how astrology has transformed the lives of those who
              sought cosmic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with more stars/circles */}
      <section className="py-20 cosmic-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: "2s" }}></div>
          
          {/* New floating elements */}
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: "2.5s" }}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: "3s" }}></div>
          <div className="absolute bottom-10 left-10 w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: "0.7s" }}></div>
          <div className="absolute top-10 right-1/2 w-2 h-2 bg-white rounded-full animate-float opacity-50" style={{ animationDelay: "1.2s" }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-serif text-4xl font-bold mb-6 animate-fade-in">
            Ready to Discover Your Cosmic Path?
          </h2>
          <p
            className="text-xl mb-8 text-gray-200 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Book your personalized astrology reading today and begin your
            journey of self-discovery and cosmic alignment.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
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
