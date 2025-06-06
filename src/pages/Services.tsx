
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Moon, Star, Sun, Zap, Clock, Book, Sparkles, Target, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Birth Chart Reading",
      description: "Comprehensive analysis of your natal chart revealing your cosmic blueprint, personality traits, and life purpose.",
      price: "$120",
      duration: "90 minutes",
      features: [
        "Complete natal chart interpretation",
        "Personality traits and strengths",
        "Life purpose and soul mission",
        "Career and relationship insights",
        "Timing for major life decisions",
        "Detailed written report included"
      ]
    },
    {
      icon: Heart,
      title: "Love & Relationships",
      description: "Explore romantic compatibility, relationship dynamics, and find guidance for matters of the heart.",
      price: "$95",
      duration: "60 minutes",
      features: [
        "Compatibility analysis with partner",
        "Relationship dynamics exploration",
        "Best timing for relationship decisions",
        "Communication style insights",
        "Love life forecast",
        "Practical relationship advice"
      ]
    },
    {
      icon: Zap,
      title: "Career & Life Purpose",
      description: "Discover your professional calling and align your career with your cosmic gifts and talents.",
      price: "$85",
      duration: "60 minutes",
      features: [
        "Career path analysis",
        "Professional strengths identification",
        "Best timing for career changes",
        "Business venture insights",
        "Financial prosperity guidance",
        "Life purpose exploration"
      ]
    },
    {
      icon: Clock,
      title: "Yearly Forecast",
      description: "Comprehensive year-ahead reading covering all major life areas and important timing.",
      price: "$140",
      duration: "90 minutes",
      features: [
        "Month-by-month forecast",
        "Major themes and opportunities",
        "Challenges and how to navigate them",
        "Best timing for decisions",
        "Relationship and career predictions",
        "Personal growth opportunities"
      ]
    },
    {
      icon: Moon,
      title: "Lunar Cycle Guidance",
      description: "Work with lunar energies to manifest goals, release what no longer serves, and align with natural rhythms.",
      price: "$65",
      duration: "45 minutes",
      features: [
        "New moon intention setting",
        "Full moon release ceremony",
        "Lunar calendar for the month",
        "Manifestation techniques",
        "Energy cleansing guidance",
        "Monthly lunar forecast"
      ]
    },
    {
      icon: Star,
      title: "Follow-up Session",
      description: "Continue your journey with additional guidance and check in on your cosmic progress.",
      price: "$75",
      duration: "45 minutes",
      features: [
        "Progress review and updates",
        "New questions addressed",
        "Refined guidance based on changes",
        "Continued support",
        "Updated timing insights",
        "Practical next steps"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Book Your Session",
      description: "Choose your preferred service and select a convenient time slot that works for you."
    },
    {
      step: "2",
      title: "Provide Birth Details",
      description: "Share your birth date, time, and location for accurate chart calculations."
    },
    {
      step: "3",
      title: "Prepare Your Questions",
      description: "Think about what areas of life you'd like to explore during our session."
    },
    {
      step: "4",
      title: "Join Your Reading",
      description: "Connect via video call or phone for your personalized astrology reading."
    }
  ];

  // New content for Service Details
  const serviceDetails = [
    {
      icon: Book,
      title: "What You'll Receive",
      items: [
        "Personalized astrological reading based on your unique birth chart",
        "Professional interpretation of your planetary positions and aspects",
        "Clear, actionable guidance tailored to your specific questions",
        "High-quality audio recording of your entire session",
        "Follow-up email with key insights and recommendations",
        "Custom PDF report with your chart and interpretations (for select services)"
      ]
    },
    {
      icon: Sparkles,
      title: "How These Readings Transform Lives",
      items: [
        "Gain clarity about your life purpose and personal mission",
        "Understand relationship patterns and improve compatibility",
        "Time major decisions to align with favorable cosmic energies",
        "Discover hidden talents and areas for personal growth",
        "Navigate challenging life transitions with greater confidence",
        "Connect with your authentic self and higher purpose"
      ]
    },
    {
      icon: Target,
      title: "My Reading Approach",
      items: [
        "Compassionate, non-judgmental interpretations focused on empowerment",
        "Blend of traditional wisdom and modern psychological insights",
        "Practical guidance that respects your free will and choices",
        "Clear explanations of complex astrological concepts",
        "Balance between validation of your experiences and forward-looking advice",
        "Holistic view connecting various life areas for integrated understanding"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-gradient mb-6">
            Astrology Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover profound insights about your life, relationships, and purpose through personalized astrology readings tailored to your unique cosmic blueprint.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Book Your Reading <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              Choose Your Reading
            </h2>
            <p className="text-xl text-muted-foreground">
              Each service is designed to provide deep insights and practical guidance for different aspects of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* New Detail Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-accent/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              The Astrology Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My readings go beyond predictions to offer transformative insights that empower you to make aligned decisions and live authentically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {serviceDetails.map((detail, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">{detail.title}</h3>
                </div>
                <ul className="space-y-3">
                  {detail.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting your astrology reading is simple and straightforward. Here's what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section - New */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              Real Client Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how my astrological readings have helped clients transform their lives, relationships, and careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Career Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "After struggling with career direction for years, my reading revealed I was fighting against my true cosmic gifts. Within months of following Luna's guidance, I found my dream position that feels effortless and fulfilling."
                </p>
                <p className="font-semibold">— Jamie T., Marketing Director</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Relationship Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Our compatibility reading explained the dynamics that were creating friction in our relationship. With Luna's insights, we've learned to appreciate our differences and communicate in ways that honor both our needs."
                </p>
                <p className="font-semibold">— Sarah & Michael, Couple's Reading</p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Life Direction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "At a major crossroads in life, Luna's birth chart reading provided the clarity I needed. The timing insights were uncannily accurate, and following her guidance led to opportunities I couldn't have imagined."
                </p>
                <p className="font-semibold">— David R., Entrepreneur</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gradient mb-4">
              What to Expect
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What information do I need for my reading?</h3>
                <p className="text-muted-foreground">
                  For the most accurate reading, I'll need your exact birth date, birth time, and birth location. If you don't know your exact birth time, that's okay - we can still do a meaningful reading with just the date and location.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">How should I prepare for my session?</h3>
                <p className="text-muted-foreground">
                  Come with an open mind and specific questions you'd like to explore. Think about areas of your life where you're seeking guidance - relationships, career, personal growth, or life direction. I'll provide insights on all major areas, but your questions help focus our time together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Will I receive a recording or written report?</h3>
                <p className="text-muted-foreground">
                  Yes! All sessions include a high-quality audio recording so you can revisit the insights anytime. Birth chart readings also include a detailed written report with your chart and key interpretations for future reference.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Can astrology predict the future?</h3>
                <p className="text-muted-foreground">
                  Astrology reveals cosmic energies and timing, showing us opportunities and challenges ahead. Rather than fixed predictions, I focus on helping you understand these energies so you can make empowered choices and align with your highest potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">How often should I get a reading?</h3>
                <p className="text-muted-foreground">
                  This varies by individual need. Many clients find value in seasonal readings (every 3-4 months) to stay aligned with cosmic cycles, while others prefer annual forecasts with follow-up sessions as needed for specific questions or transitions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What's your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  I understand that life happens. You can reschedule or cancel your appointment with at least 24 hours notice at no charge. Last-minute cancellations or no-shows may be subject to a 50% fee. Emergencies are always considered on a case-by-case basis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with stars */}
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
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Discover Your Cosmic Blueprint?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Take the first step toward understanding your unique astrological gifts and life path. Book your personalized reading today.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-black hover:scale-105 transition-all duration-300">
            <Link to="/contact">
              Schedule Your Reading <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
