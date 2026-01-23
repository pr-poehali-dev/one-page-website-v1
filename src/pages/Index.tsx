import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-8 px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-center text-white drop-shadow-2xl animate-fade-in">
        MEGA BEST 2026
      </h1>
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