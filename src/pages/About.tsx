
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Heart, Star, Users } from 'lucide-react';

const About = () => {
  const credentials = [
    { icon: Award, title: "Certified Professional Astrologer", description: "International Society of Astrological Research" },
    { icon: BookOpen, title: "15+ Years Experience", description: "Thousands of successful readings completed" },
    { icon: Star, title: "Specialized Training", description: "Vedic & Western Astrology, Tarot, Numerology" },
    { icon: Users, title: "1000+ Happy Clients", description: "Featured in wellness magazines and podcasts" }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "I believe in honest, compassionate readings that honor your unique journey and challenges."
    },
    {
      title: "Empowerment",
      description: "My goal is to help you understand your cosmic blueprint and make empowered life decisions."
    },
    {
      title: "Respect",
      description: "Every reading is conducted with deep respect for your privacy, beliefs, and personal journey."
    },
    {
      title: "Growth",
      description: "I'm committed to your spiritual growth and helping you align with your highest potential."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl font-bold text-gradient mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I'm Luna Celestine, a professional astrologer dedicated to helping souls connect with their cosmic purpose and navigate life's journey with wisdom and clarity.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My path to astrology began during a personal spiritual awakening 15 years ago. Since then, I've devoted my life to studying the ancient art of astrology and helping others discover the profound insights hidden within their birth charts.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a Reading <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                  alt="Mystical landscape" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gradient text-center mb-16">My Journey</h2>
          
          <div className="space-y-8 text-lg text-muted-foreground">
            <p>
              My journey into astrology wasn't planned—it was written in the stars. During a challenging period in my early twenties, I discovered my birth chart and was amazed by how accurately it described my personality, challenges, and potential. That moment sparked a lifelong passion for understanding the cosmic influences that shape our lives.
            </p>
            
            <p>
              I spent years studying under renowned astrologers, earning certifications in both Western and Vedic astrology. I've also trained in complementary modalities including tarot reading, numerology, and crystal healing to provide the most comprehensive guidance possible.
            </p>
            
            <p>
              What sets my practice apart is my belief that astrology isn't about predicting a fixed future—it's about understanding your cosmic blueprint and using that knowledge to make empowered choices. Every reading I give is focused on helping you step into your power and align with your highest path.
            </p>
            
            <p>
              Today, I'm honored to have guided thousands of individuals through major life transitions, helping them find love, choose careers, heal relationships, and discover their life purpose. My work has been featured in several wellness publications, and I regularly speak at spiritual conferences and workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gradient text-center mb-16">Credentials & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <credential.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">My Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I believe in creating a safe, non-judgmental space where you can explore your deepest questions and receive guidance that honors your unique journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cosmic-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            I'd be honored to be your guide as you explore the wisdom of your stars and step into your cosmic potential.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-black">
            <Link to="/services">
              Explore My Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
