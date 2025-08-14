import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to play
            <span className="text-transparent bg-clip-text gold-gradient"> tonight?</span>
          </h2>
          
          <Button 
            variant="hero" 
            size="xl"
            className="bounce-transition hover:scale-110"
            asChild
          >
            <a href="https://preview--lobby-play-now.lovable.app/" target="_blank" rel="noopener noreferrer">
              Start a Quickmatch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;