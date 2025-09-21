import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SimulationPage = () => {
  const [subject, setSubject] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [studentPrompt, setStudentPrompt] = useState("");
  const [learningContext, setLearningContext] = useState("");

  const canProceed = subject && ageGroup && studentPrompt && learningContext;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navigation Header */}
      <div className="bg-background border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-stem-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <span className="font-medium">Student Simulation</span>
              </div>
              <div className="w-8 h-1 bg-muted rounded-full"></div>
              <div className="flex items-center gap-2 opacity-50">
                <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <span>Evaluation Rubric</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Part 1: Student Simulation</h1>
            <p className="text-xl text-muted-foreground">
              Create authentic student prompts and simulate realistic learning conversations
            </p>
          </div>

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

              <div className="flex justify-between pt-6">
                <Link to="/">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </Link>
                
                {canProceed ? (
                  <Link to="/rubric">
                    <Button variant="assessment">
                      Continue to Rubric
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="assessment" disabled>
                    Complete all fields to continue
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SimulationPage;