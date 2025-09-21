import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Beaker, Users } from "lucide-react";

const StudentSimulation = () => {
  const [subject, setSubject] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [studentPrompt, setStudentPrompt] = useState("");
  const [learningContext, setLearningContext] = useState("");

  const subjectIcons = {
    mathematics: Calculator,
    physics: BookOpen,
    chemistry: Beaker,
  };

  const examples = [
    {
      subject: "Mathematics",
      title: "Number Theory Olympiad Prep",
      prompt: "I'm 17 and preparing for number theory olympiads. Please create a 6-problem mock test with this split: (2) modular arithmetic, (2) Diophantine equations, (1) multiplicative functions, (1) combinatorial number theory...",
      icon: Calculator,
    },
    {
      subject: "Physics", 
      title: "Mechanics & Oscillations",
      prompt: "I'm 16, prepping for physics olympiads. Create a 5-problem set covering (2) rotational dynamics, (2) SHM, (1) energy+momentum mix...",
      icon: BookOpen,
    },
    {
      subject: "Chemistry",
      title: "Thermodynamics & Equilibrium", 
      prompt: "I'm 18, preparing for chemistry olympiads. Create a 5-problem set: (2) equilibrium (K, pH, buffers), (2) thermodynamics (ΔH, ΔS, ΔG, K)...",
      icon: Beaker,
    },
  ];

  return (
    <div className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Part 1: Student Simulation</h2>
          <p className="text-xl text-muted-foreground">
            Create authentic student prompts and simulate realistic learning conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-stem-blue" />
                Create Student Prompt
              </CardTitle>
              <CardDescription>
                Design a realistic learning scenario for a student aged 13-24
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Area</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Student Age</Label>
                  <Select value={ageGroup} onValueChange={setAgeGroup}>
                    <SelectTrigger>
                      <SelectValue placeholder="Age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="13-15">13-15 years</SelectItem>
                      <SelectItem value="16-18">16-18 years</SelectItem>
                      <SelectItem value="19-21">19-21 years</SelectItem>
                      <SelectItem value="22-24">22-24 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="context">Learning Context</Label>
                <Input
                  id="context"
                  placeholder="e.g., Olympiad preparation, coursework help, exam prep"
                  value={learningContext}
                  onChange={(e) => setLearningContext(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt">Student Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="Write the exact prompt a student would send to the LLM..."
                  className="min-h-[200px]"
                  value={studentPrompt}
                  onChange={(e) => setStudentPrompt(e.target.value)}
                />
              </div>

              <Button variant="assessment" className="w-full">
                Generate LLM Response
              </Button>
            </CardContent>
          </Card>

          {/* Examples */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Example Prompts</h3>
              <p className="text-muted-foreground mb-6">
                Reference these examples from the assessment document
              </p>
            </div>

            {examples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <Card key={index} className="bg-[var(--gradient-card)] border-0 shadow-sm hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-stem-blue/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-stem-blue" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {example.subject}
                          </Badge>
                        </div>
                        <h4 className="font-semibold mb-2">{example.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {example.prompt.substring(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSimulation;