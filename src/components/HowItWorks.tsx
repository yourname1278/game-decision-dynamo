import { Share, Upload, Vote, Play } from "lucide-react";

const steps = [
  {
    icon: Share,
    title: "Create",
    description: "Create a room. Share the link."
  },
  {
    icon: Upload,
    title: "Paste",
    description: "Paste your games. Mark what's installed."
  },
  {
    icon: Vote,
    title: "Vote",
    description: "Vote. Pick up to 3 games and one start time."
  },
  {
    icon: Play,
    title: "Play",
    description: "Play. Winner announced. Add to calendar."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-warhammer.jpg"
          alt="Strategic gaming planning"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="text-center relative group"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-2"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-card border border-primary/20 flex items-center justify-center group-hover:border-primary/50 smooth-transition panel-shadow">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Optionally import Steam owned titles; others can paste lists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;