import { Check, Clock, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Check,
    title: "End the debate",
    description: "Show only games everyone owns."
  },
  {
    icon: Zap,
    title: "Skip the patching",
    description: "Installed first so you play now, not later."
  },
  {
    icon: Clock,
    title: "Agree on time",
    description: "Vote game + start time together."
  },
  {
    icon: Users,
    title: "Zero friction",
    description: "Paste your library. Share a link. Done."
  }
];

const ProblemValue = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why LobbyNow?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 smooth-transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemValue;