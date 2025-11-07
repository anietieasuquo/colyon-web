import { Network } from "lucide-react";
import { useEffect, useState } from "react";

const Technology = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Technology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Colyon's <span className="text-accent font-semibold">multi-agent intelligence framework</span> powers adaptive, secure AI decisions across products and platforms.
            </p>
          </div>
          
          <div className="relative h-96 bg-gradient-to-br from-accent/5 to-mint/5 rounded-2xl border border-border overflow-hidden">
            {/* Network visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Central node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-full animate-pulse-slow flex items-center justify-center">
                  <Network className="w-8 h-8 text-background" />
                </div>
                
                {/* Orbiting nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const baseAngle = (i * Math.PI * 2) / 6;
                  const currentAngle = baseAngle + (rotation * Math.PI) / 180;
                  const x = 50 + 40 * Math.cos(currentAngle);
                  const y = 50 + 40 * Math.sin(currentAngle);
                  
                  return (
                    <div
                      key={i}
                      className="absolute w-8 h-8 bg-mint rounded-full transition-all duration-50 z-10"
                      style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const baseAngle = (i * Math.PI * 2) / 6;
                    const currentAngle = baseAngle + (rotation * Math.PI) / 180;
                    const x = 50 + 40 * Math.cos(currentAngle);
                    const y = 50 + 40 * Math.sin(currentAngle);
                    return (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="hsl(var(--accent))"
                        strokeWidth="1"
                        opacity="0.3"
                        className="transition-all duration-50"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
