import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: 'Copied!',
        description: `${label} address copied to clipboard`,
      });
    });
  };

  const plans = [
    {
      name: 'Basic',
      price: '$20',
      videos: '5,000',
      description: 'Perfect for small projects',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Premium',
      price: '$30',
      videos: '7,000',
      description: 'Most popular choice',
      gradient: 'from-orange-500 to-red-500',
      popular: true,
    },
    {
      name: 'Ultimate',
      price: '$60',
      videos: '30,000',
      description: 'For professional creators',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const paymentMethods = [
    { 
      name: 'PayPal', 
      icon: 'CreditCard', 
      address: 'zoid.ketevan@gmail.com',
      note: 'Use family and friends',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Bitcoin', 
      icon: 'Bitcoin', 
      address: '1LHwjpMPtuhzNjUp6nXMXaFmu5EGinvWNY',
      color: 'from-orange-400 to-orange-600'
    },
    { 
      name: 'USDT', 
      icon: 'DollarSign', 
      address: 'TXHWYwxR2Exj9MCn1wCLTfhi8sMvKUN1bj',
      color: 'from-green-400 to-green-600'
    },
    { 
      name: 'Ethereum', 
      icon: 'Gem', 
      address: 'Coming Soon',
      color: 'from-purple-400 to-purple-600'
    },
  ];

  const portfolioItems = [
    { 
      title: 'Fashion Content', 
      views: '1M+', 
      category: 'Fashion',
      image: 'https://cdn.poehali.dev/files/Screenshot-38.jpg'
    },
    { 
      title: 'Lifestyle Series', 
      views: '500K+', 
      category: 'Lifestyle',
      image: 'https://cdn.poehali.dev/files/Screenshot-39.jpg'
    },
    { 
      title: 'Creative Campaign', 
      views: '2M+', 
      category: 'Creative',
      image: 'https://cdn.poehali.dev/files/Screenshot-40.jpg'
    },
    { 
      title: 'Brand Portfolio', 
      views: '800K+', 
      category: 'Commercial',
      image: 'https://cdn.poehali.dev/files/Screenshot-42.jpg'
    },
    { 
      title: 'Personal Branding', 
      views: '1.5M+', 
      category: 'Personal',
      image: 'https://cdn.poehali.dev/files/Screenshot-46.jpg'
    },
    { 
      title: 'MEGA Files', 
      views: 'Premium', 
      category: 'Content',
      image: 'https://cdn.poehali.dev/projects/e9e41fa1-812d-4553-bb86-c4bc67c5be5e/bucket/e53e0497-74bc-4aa7-9c01-40fa0392da5b.jpg'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolutely amazing quality! The videos exceeded all my expectations. Fire content! 🔥',
      avatar: '👩',
    },
    {
      name: 'Mike R.',
      rating: 5,
      text: 'Best investment ever! My engagement skyrocketed. This is pure gold!',
      avatar: '👨',
    },
    {
      name: 'Jessica L.',
      rating: 5,
      text: 'Incredible work! Everything is super professional. Highly recommend! ⭐',
      avatar: '👱‍♀️',
    },
    {
      name: 'David K.',
      rating: 5,
      text: 'Top-tier quality! Fast delivery and stunning results. Absolutely perfect!',
      avatar: '🧔',
    },
    {
      name: 'Emma T.',
      rating: 5,
      text: 'Mind-blowing content! Worth every penny. This product is straight fire! 🚀',
      avatar: '👩‍🦰',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            VideoStudio
          </div>
          <div className="hidden md:flex gap-8">
            {['Home', 'Services', 'Portfolio'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection('services')}
          >
            Get Started
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-12 text-white drop-shadow-2xl animate-fade-in">
            MEGA BEST 2026
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="Eye" size={40} className="text-primary drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://t.me/tokare2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-12 py-7 hover:scale-105 transition-all shadow-2xl"
              >
                <Icon name="Send" className="mr-3" size={24} />
                Contact Admin on Telegram
              </Button>
            </a>
            <p className="text-white/70 text-lg mt-6 animate-fade-in">
              You will receive MEGA when you purchase
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">What Our Clients Say</h2>
            <p className="text-xl text-white/80">Real reviews from satisfied customers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/90 backdrop-blur-md hover:scale-105 transition-all duration-300 animate-fade-in border-2 border-white/50 shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-xl text-muted-foreground">Flexible pricing for every project size</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative p-8 bg-card/50 backdrop-blur-sm border-2 hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                  <Icon name="Video" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                  <Icon name="Film" size={20} />
                  <span className="text-lg">{plan.videos} video mega</span>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      <Icon name="ShoppingCart" className="mr-2" size={18} />
                      Buy Now
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4" align="center">
                    <h4 className="font-semibold text-lg mb-4">Choose Payment Method</h4>
                    <div className="space-y-3">
                      {paymentMethods.map((method, idx) => (
                        <div 
                          key={idx}
                          className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                              <Icon name={method.icon as any} size={16} className="text-white" />
                            </div>
                            <span className="font-semibold">{method.name}</span>
                          </div>
                          <div className="bg-background/50 rounded p-2 mb-2">
                            <p className="text-xs text-muted-foreground break-all">{method.address}</p>
                            {method.note && (
                              <p className="text-xs text-primary font-medium mt-1">{method.note}</p>
                            )}
                          </div>
                          {method.address !== 'Coming Soon' && (
                            <Button
                              onClick={() => copyToClipboard(method.address, method.name)}
                              variant="outline"
                              size="sm"
                              className="w-full gap-2"
                            >
                              <Icon name="Copy" size={14} />
                              Copy
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </Card>
            ))}
          </div>


        </div>
      </section>



      <a
        href="https://t.me/tokare2"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform rounded-full w-16 h-16 p-0 shadow-2xl"
          >
            <Icon name="MessageCircle" size={28} />
          </Button>
        </div>
      </a>
    </div>
  );
};

export default Index;