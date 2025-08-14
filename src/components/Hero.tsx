import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-gaming.jpg"
          alt="Friends deciding a game together"
          className="w-full h-full object-cover opacity-80"
          style={{ display: 'block' }}
          onLoad={() => console.log('Hero image loaded successfully')}
          onError={(e) => console.error('Hero image failed to load:', e)}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Stop choosing.
            <br />
            <span className="text-transparent bg-clip-text gold-gradient">
              Start playing.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Pick a game and a start time in under a minute. See what everyone owns. 
            Vote fast. Calendar-ready in one click.
          </p>

          {/* Primary CTA */}
          <div className="mb-8">
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

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="secondary" className="bg-card/50 text-muted-foreground border-primary/20">
              No downloads
            </Badge>
            <Badge variant="secondary" className="bg-card/50 text-muted-foreground border-primary/20">
              Free to try
            </Badge>
            <Badge variant="secondary" className="bg-card/50 text-muted-foreground border-primary/20">
              Works on mobile
            </Badge>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;