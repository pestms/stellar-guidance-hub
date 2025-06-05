
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Clock, MapPin, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    birthDate: '',
    birthTime: '',
    birthLocation: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and service selection are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Booking Request Sent!",
      description: "I'll get back to you within 24 hours to confirm your session details."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      birthDate: '',
      birthTime: '',
      birthLocation: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Birth Chart Reading ($120)",
    "Love & Relationships ($95)",
    "Career & Life Purpose ($85)",
    "Yearly Forecast ($140)",
    "Lunar Cycle Guidance ($65)",
    "Follow-up Session ($75)"
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@celestialguidance.com",
      description: "I respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Available for consultations"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Monday - Friday: 9 AM - 7 PM",
      description: "Weekend sessions by appointment"
    },
    {
      icon: MapPin,
      title: "Sessions",
      details: "Online & Phone Readings",
      description: "Serving clients worldwide"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-gradient mb-6">
            Book Your Reading
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to explore your cosmic blueprint? Fill out the form below to schedule your personalized astrology reading, or reach out with any questions you might have.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-gradient flex items-center">
                  <Calendar className="mr-2 h-6 w-6" />
                  Schedule Your Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Preferred Service *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your reading type" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Birth Information</h3>
                    <p className="text-sm text-muted-foreground">
                      For the most accurate reading, please provide your birth details. If you don't know your exact birth time, that's okay!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="birthDate">Birth Date</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="birthTime">Birth Time (if known)</Label>
                        <Input
                          id="birthTime"
                          type="time"
                          value={formData.birthTime}
                          onChange={(e) => handleInputChange('birthTime', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="birthLocation">Birth Location (City, State/Country)</Label>
                      <Input
                        id="birthLocation"
                        placeholder="e.g., New York, NY, USA"
                        value={formData.birthLocation}
                        onChange={(e) => handleInputChange('birthLocation', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Questions or Special Requests</Label>
                    <Textarea
                      id="message"
                      placeholder="What areas of your life would you like to explore? Any specific questions for your reading?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Booking Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * I'll respond within 24 hours to confirm your session details and arrange payment.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-gradient flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-muted-foreground">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">What Happens Next?</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <p>I'll review your booking request and respond within 24 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <p>We'll schedule a convenient time for your reading</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">3</span>
                      </div>
                      <p>I'll send you payment details and session preparation tips</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">4</span>
                      </div>
                      <p>Join your personalized astrology reading at the scheduled time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cosmic-gradient text-white border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold mb-3">
                    Have Questions First?
                  </h3>
                  <p className="mb-4 text-gray-200">
                    Not sure which reading is right for you? I'm happy to help you choose the perfect service for your needs.
                  </p>
                  <Button variant="secondary" size="sm">
                    Email Me Your Questions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
