import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
    { title: 'Corporate Video', views: '1M+', category: 'Business' },
    { title: 'Product Launch', views: '500K+', category: 'Commercial' },
    { title: 'Brand Story', views: '2M+', category: 'Marketing' },
    { title: 'Social Campaign', views: '800K+', category: 'Social Media' },
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

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient bg-[length:200%_200%]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Professional Video Production
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transform your vision into stunning visual content with our premium video services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => scrollToSection('services')}
              >
                <Icon name="Play" className="mr-2" size={20} />
                View Packages
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-primary/10 hover:scale-105 transition-all"
                onClick={() => scrollToSection('portfolio')}
              >
                <Icon name="Eye" className="mr-2" size={20} />
                Our Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={32} className="text-primary" />
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
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-8">Payment Methods</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                  <Icon name={method.icon as any} size={24} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">{method.name}</h4>
                <p className="text-sm text-muted-foreground break-all mb-2">{method.address}</p>
                {method.note && (
                  <p className="text-xs text-primary font-medium">{method.note}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-muted-foreground">Projects that made an impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="PlayCircle" size={48} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Icon name="TrendingUp" size={16} className="text-primary" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.category}</span>
                    <span className="text-primary font-medium">{item.views} views</span>
                  </div>
                </div>
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

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              VideoStudio
            </div>
            <p className="text-muted-foreground">Professional video production services</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="https://t.me/tokare2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 VideoStudio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
