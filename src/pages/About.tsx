import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Heart, Star, Users, Moon, Sun, Sparkles, Compass, Clock, Eye, Coffee, Feather } from 'lucide-react';

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

  const astrologyServices = [
    {
      icon: Sun,
      title: "Natal Chart Analysis",
      description: "Understanding your birth chart reveals your personality, strengths, challenges, and life purpose through planetary positions at birth."
    },
    {
      icon: Moon,
      title: "Lunar Guidance",
      description: "Working with moon phases and lunar cycles to optimize timing for important decisions and personal growth."
    },
    {
      icon: Sparkles,
      title: "Transit Readings",
      description: "Current planetary movements and how they affect your personal chart, revealing opportunities and challenges ahead."
    },
    {
      icon: Compass,
      title: "Relationship Compatibility",
      description: "Synastry and composite chart analysis to understand relationship dynamics and compatibility between partners."
    },
    {
      icon: Clock,
      title: "Timing & Predictions",
      description: "Using progressions and transits to identify the best timing for major life decisions and upcoming influences."
    },
    {
      icon: Eye,
      title: "Spiritual Guidance",
      description: "Connecting with your higher self through astrological insights to support your spiritual journey and awakening."
    }
  ];

  const astrologyFacts = [
    {
      title: "Ancient Wisdom",
      description: "Astrology is one of humanity's oldest sciences, practiced for over 4,000 years across civilizations from Babylon to India to Greece."
    },
    {
      title: "Planetary Influence",
      description: "Each planet in our solar system represents different aspects of human experience - from communication (Mercury) to love (Venus) to transformation (Pluto)."
    },
    {
      title: "Zodiac Signs",
      description: "The 12 zodiac signs represent archetypal energies that influence personality traits, motivations, and life patterns based on your birth date."
    },
    {
      title: "Houses & Aspects",
      description: "Your birth chart is divided into 12 houses representing life areas, while planetary aspects reveal how cosmic energies interact in your life."
    }
  ];

  const personalJourney = {
    title: "My Personal Journey",
    content: [
      "Born under a powerful full moon with Jupiter rising, I've always felt a deep connection to the cosmos. My first encounter with astrology came during a transformative period in my life when I was seeking answers about my life purpose.",
      "A chance meeting with a master astrologer in Sedona revealed talents and life patterns I had never consciously recognized. That profound experience set me on a path of serious astrological study that has spanned over 15 years.",
      "I've traveled extensively to study with renowned astrologers across the globe - from traditional Vedic techniques in India to evolutionary astrology in the United States. These diverse perspectives have enriched my practice and allow me to offer multidimensional insights to my clients.",
      "When I'm not exploring the stars, you can find me tending to my garden, practicing meditation, or hiking through nature's wonders. I believe that connecting with the earth is just as important as connecting with the cosmos - both provide essential wisdom for balanced living."
    ]
  };

  const dailyPractice = [
    {
      icon: Coffee,
      title: "Morning Rituals",
      description: "I begin each day by observing the current planetary positions and moon phase, integrating this cosmic awareness into my meditation practice to set intentions aligned with celestial energies."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "I dedicate time each week to studying ancient texts and modern astrological developments, ensuring my practice incorporates both timeless wisdom and contemporary insights."
    },
    {
      icon: Heart,
      title: "Client Preparation",
      description: "Before each reading, I spend time in contemplative preparation, connecting with the unique energy of your chart to provide the most insightful and compassionate guidance."
    },
    {
      icon: Feather,
      title: "Integration Work",
      description: "I regularly practice integrating spiritual and astrological wisdom into practical, grounded actions - a process I guide my clients through as well."
    }
  ];

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-5xl font-bold text-gradient mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I'm Luna Celestine, a professional astrologer dedicated to helping souls connect with their cosmic purpose and navigate life's journey with wisdom and clarity.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My path to astrology began during a personal spiritual awakening 15 years ago. Since then, I've devoted my life to studying the ancient art of astrology and helping others discover the profound insights hidden within their birth charts.
              </p>
              <Button asChild size="lg" className="hover-scale">
                <Link to="/contact">
                  Book a Reading <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center overflow-hidden hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                  alt="Mystical starry night sky" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Personal Journey Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-accent/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">{personalJourney.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Story Content */}
            <div className="space-y-6 text-lg text-muted-foreground">
              {personalJourney.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            {/* Right Column - Daily Practice */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold mb-6">My Daily Practice</h3>
              <div className="grid grid-cols-1 gap-6">
                {dailyPractice.map((practice, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <practice.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{practice.title}</h4>
                          <p className="text-muted-foreground text-sm">{practice.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Astrology Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-6">Understanding Astrology</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Astrology is the ancient practice of studying celestial movements and their influence on human affairs and natural phenomena. 
              It's a symbolic language that connects us to the cosmos and provides profound insights into our personalities, relationships, and life paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {astrologyFacts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Astrology Services Overview */}
      <section className="py-20 bg-card relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-6">How Astrology Can Guide You</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through various astrological techniques and interpretations, I help you understand the cosmic influences 
              shaping your life and provide guidance for making empowered decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {astrologyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gradient text-center mb-16 animate-fade-in">My Journey</h2>
          
          <div className="space-y-8 text-lg text-muted-foreground animate-fade-in">
            <p>
              My journey into astrology wasn't planned—it was written in the stars. During a challenging period in my early twenties, 
              I discovered my birth chart and was amazed by how accurately it described my personality, challenges, and potential. 
              That moment sparked a lifelong passion for understanding the cosmic influences that shape our lives.
            </p>
            
            <p>
              I spent years studying under renowned astrologers, earning certifications in both Western and Vedic astrology. 
              The ancient wisdom of these traditions fascinated me - how the positions of planets at the moment of birth could 
              reveal so much about a person's character, life purpose, and destiny. I've also trained in complementary modalities 
              including tarot reading, numerology, and crystal healing to provide the most comprehensive guidance possible.
            </p>
            
            <p>
              What sets my practice apart is my belief that astrology isn't about predicting a fixed future—it's about understanding 
              your cosmic blueprint and using that knowledge to make empowered choices. The planets don't control us; they simply 
              reflect the energies and opportunities available to us at any given time. Every reading I give is focused on helping 
              you step into your power and align with your highest path.
            </p>
            
            <p>
              Today, I'm honored to have guided thousands of individuals through major life transitions, helping them find love, 
              choose careers, heal relationships, and discover their life purpose. My work has been featured in several wellness 
              publications, and I regularly speak at spiritual conferences and workshops about the transformative power of astrology.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gradient text-center mb-16 animate-fade-in">Credentials & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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
      <section className="py-20 bg-background relative">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
            alt="Deer in nature" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">My Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I believe in creating a safe, non-judgmental space where you can explore your deepest questions and 
              receive guidance that honors your unique journey. My readings combine ancient wisdom with practical insights 
              for modern living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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

      {/* CTA Section - Enhanced with more stars */}
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
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            I'd be honored to be your guide as you explore the wisdom of your stars and step into your cosmic potential. 
            Let the ancient wisdom of astrology illuminate your path forward.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-black hover-scale">
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
