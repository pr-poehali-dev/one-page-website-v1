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

      <div className="mt-12 w-full max-w-4xl">
        <h3 className="text-3xl font-bold text-center text-white mb-8">Customer Reviews</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                👩
              </div>
              <div>
                <h4 className="font-bold text-white">Sarah M.</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80">
              Amazing quality! Got access in minutes after payment. The MEGA folders are packed with content. Highly recommend! 🔥
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                👨
              </div>
              <div>
                <h4 className="font-bold text-white">Mike R.</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80">
              Best purchase ever! Fast delivery, legit seller. Worth every dollar. Already got 30GB+ of premium content! ⭐
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl">
                👱‍♀️
              </div>
              <div>
                <h4 className="font-bold text-white">Jessica L.</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80">
              Super reliable! Paid via PayPal and received everything instantly. The seller is professional and responsive. 100% legit! 💯
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl">
                🧔
              </div>
              <div>
                <h4 className="font-bold text-white">David K.</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/80">
              No scam here! Genuine service. Paid $20 and got immediate access. Tons of high-quality content. This is pure gold! 🚀
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-8 w-full max-w-5xl">
        <h3 className="text-2xl font-bold text-center text-white mb-6">Payment Proof & Customer Messages</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <img 
              src="https://cdn.poehali.dev/projects/e9e41fa1-812d-4553-bb86-c4bc67c5be5e/bucket/ce4ba450-4fd4-40e9-9711-a546eebf3286.jpg"
              alt="Payment confirmation"
              className="w-full h-auto"
            />
          </Card>
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <img 
              src="https://cdn.poehali.dev/projects/e9e41fa1-812d-4553-bb86-c4bc67c5be5e/bucket/4d22fedc-690f-4fc7-9359-a386de13b43f.jpg"
              alt="Customer testimonials and proof"
              className="w-full h-auto"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;