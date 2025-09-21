import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Beaker } from "lucide-react";

const ExamplesPage = () => {
  const examples = [
    {
      subject: "Mathematics",
      title: "Number Theory Olympiad Prep",
      description: "17-year-old preparing for number theory olympiads",
      prompt: `I'm 17 and preparing for number theory olympiads. Please create a 6-problem mock test with this split: (2) modular arithmetic, (2) Diophantine equations, (1) multiplicative functions, (1) combinatorial number theory. Format: First list Problems 1–6 (no solutions). Then a separate Solutions section with ≤150 words per solution, using number-theoretic methods (no brute-force enumeration). Tag each problem Easy/Medium/Hard and include one key lemma name used in the solution. End with a checklist of common pitfalls. Add 2 reputable resource links (e.g., AoPS, university notes). No images. Plain text is fine.`,
      icon: Calculator,
      color: "stem-blue",
    },
    {
      subject: "Physics",
      title: "Mechanics & Oscillations",
      description: "16-year-old preparing for physics olympiads",
      prompt: `I'm 16, prepping for physics olympiads. Create a 5-problem set covering (2) rotational dynamics, (2) SHM, (1) energy+momentum mix. Deliverables: (a) Problem statements; (b) Solutions with symbolic derivation first, then numeric evaluation. Use g=9.8 m/s² unless stated. Give final numeric answers with units and 2 significant figures. Include an assumption table (idealizations) and a variable table (symbols/units). No diagrams.`,
      icon: BookOpen,
      color: "stem-green",
    },
    {
      subject: "Chemistry",
      title: "Thermodynamics & Equilibrium",
      description: "18-year-old preparing for chemistry olympiads",
      prompt: `I'm 18, preparing for chemistry olympiads. Create a 5-problem set: (2) equilibrium (K, pH, buffers), (2) thermodynamics (ΔH, ΔS, ΔG, K), (1) combined application. Requirements: Provide given data (R, Ka/Kb, ΔH°/ΔS° if needed). Show units throughout. For thermodynamics, compute ΔG° at 298 K and K via ΔG∘=−RTlnK. For buffers, use Henderson–Hasselbalch with pH to 2. End with a summary table of final numeric answers (units). No images.`,
      icon: Beaker,
      color: "stem-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-4">Assessment Examples</h1>
          <p className="text-xl text-muted-foreground">
            Reference examples from the STEM assessment document across mathematics, physics, and chemistry
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {examples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <Card key={index} className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)]">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-${example.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{example.title}</CardTitle>
                          <Badge variant="secondary">{example.subject}</Badge>
                        </div>
                        <CardDescription className="text-base">
                          {example.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Student Prompt:</h4>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {example.prompt}
                          </p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <h4 className="font-semibold mb-3">Key Assessment Criteria:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {example.subject === "Mathematics" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-blue rounded-full"></div>
                                <span className="text-sm">Exactly 6 problems listed</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-blue rounded-full"></div>
                                <span className="text-sm">Correct topic distribution</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-blue rounded-full"></div>
                                <span className="text-sm">Solutions ≤150 words each</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-blue rounded-full"></div>
                                <span className="text-sm">Includes difficulty tags</span>
                              </div>
                            </>
                          )}
                          {example.subject === "Physics" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-green rounded-full"></div>
                                <span className="text-sm">5 problems with correct split</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-green rounded-full"></div>
                                <span className="text-sm">Symbolic then numeric solutions</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-green rounded-full"></div>
                                <span className="text-sm">2 significant figures</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-green rounded-full"></div>
                                <span className="text-sm">Includes variable tables</span>
                              </div>
                            </>
                          )}
                          {example.subject === "Chemistry" && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-orange rounded-full"></div>
                                <span className="text-sm">5 problems with correct split</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-orange rounded-full"></div>
                                <span className="text-sm">Units shown throughout</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-orange rounded-full"></div>
                                <span className="text-sm">pH to 2 decimal places</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-stem-orange rounded-full"></div>
                                <span className="text-sm">Summary table included</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="lg" onClick={() => window.history.back()}>
              Start Your Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;