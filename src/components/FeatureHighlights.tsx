import { Clock, Zap, Calendar, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Quickmatch rooms",
    description: "Decide game + time fast."
  },
  {
    icon: Zap,
    title: "Installed-first ranking",
    description: "Spend time playing, not updating."
  },
  {
    icon: Calendar,
    title: "Calendar-ready",
    description: ".ics + Google Calendar in one click."
  },
  {
    icon: UserCheck,
    title: "No accounts required",
    description: "Optional sign-in for convenience."
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-primary/20 panel-shadow hover:border-primary/40 hover:scale-105 smooth-transition group"
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;