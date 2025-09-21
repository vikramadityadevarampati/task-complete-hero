import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Target, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const AssessmentHeader = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            STEM LLM Assessment Platform
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Evaluate large language model performance for student learning needs across mathematics, physics, and chemistry
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/simulation">
              <Button variant="hero" size="lg" className="min-w-[200px]">
                Start Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/examples">
              <Button variant="outline" size="lg" className="min-w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Assessment Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/simulation">
              <Card className="p-8 text-center bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] cursor-pointer">
                <div className="w-16 h-16 bg-stem-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Part 1: Student Simulation</h3>
                <p className="text-muted-foreground">
                  Create authentic student prompts and simulate conversations with LLMs for ages 13-24
                </p>
              </Card>
            </Link>

            <Link to="/rubric">
              <Card className="p-8 text-center bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] cursor-pointer">
                <div className="w-16 h-16 bg-stem-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Part 2: Evaluation Rubric</h3>
                <p className="text-muted-foreground">
                  Design objective criteria with 10-20 atomic, measurable assessment points
                </p>
              </Card>
            </Link>

            <Link to="/examples">
              <Card className="p-8 text-center bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] cursor-pointer">
                <div className="w-16 h-16 bg-stem-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">STEM Focus Areas</h3>
                <p className="text-muted-foreground">
                  Mathematics, Physics, and Chemistry olympiad-level problem sets and solutions
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHeader;