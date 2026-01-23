import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-8 px-6 py-12">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-white drop-shadow-2xl animate-fade-in">
        MEGA BEST 2026
      </h1>
      
      <Card className="max-w-md w-full overflow-hidden bg-card/50 backdrop-blur-sm">
        <img 
          src="https://cdn.poehali.dev/projects/e9e41fa1-812d-4553-bb86-c4bc67c5be5e/bucket/9f3ccfe9-f5de-44da-9004-b4fe28817599.jpg"
          alt="MEGA folders"
          className="w-full h-auto"
        />
      </Card>

      <div className="text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Want MEGAs like these?
        </h2>
        <p className="text-xl text-white/90 mb-2">
          You need to pay for access - $20
        </p>
        <p className="text-lg text-white/80 mb-6">
          PayPal / Bitcoin accepted
        </p>
      </div>

      <a 
        href="https://t.me/tokare2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 hover:scale-105 transition-all shadow-2xl"
        >
          <Icon name="Send" className="mr-3" size={24} />
          Contact for MEGA on Telegram
        </Button>
      </a>
    </div>
  );
};

export default Index;