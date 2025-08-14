import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "We decided in 90 seconds. Actually played for once.",
    author: "Alex",
    role: "new parent"
  },
  {
    quote: "Perfect for our Thursday squad. No more launcher ping-pong.",
    author: "Mei",
    role: "co-op fan"
  },
  {
    quote: "Installed-first sorting is clutch. We jump straight in.",
    author: "Sam",
    role: "PC gamer"
  }
];

const trustedBy = [
  "Indie communities",
  "Campus clubs", 
  "After-work squads"
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Loved by busy gamers
          </h2>
          
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < 4 ? "text-primary fill-primary" : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-lg font-semibold text-foreground ml-2">4.8/5</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-primary/20 panel-shadow hover:border-primary/40 smooth-transition">
              <CardContent className="p-6">
                <blockquote className="text-foreground mb-4 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-muted-foreground not-italic">
                  — {testimonial.author}, {testimonial.role}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted By */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustedBy.map((group, index) => (
              <span key={index} className="text-foreground font-medium">
                {group}
              </span>
            ))}
          </div>
        </div>

        {/* Legal Note */}
        <div className="text-center mt-12">
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            Steam, Electronic Arts, Battle.net and related marks are trademarks of their respective owners. 
            LobbyNow is not affiliated with or endorsed by them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;