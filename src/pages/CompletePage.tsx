import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Share, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const CompletePage = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-stem-green rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Assessment Completed!</h1>
            <p className="text-xl text-muted-foreground">
              Your STEM LLM assessment framework is ready for evaluation
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="text-lg">Part 1: Student Simulation</CardTitle>
                <CardDescription>Your authentic learning scenario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <span className="text-sm font-medium text-stem-green">✓ Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Subject:</span>
                    <span className="text-sm font-medium">Ready for LLM testing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="text-lg">Part 2: Evaluation Rubric</CardTitle>
                <CardDescription>Your objective assessment criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <span className="text-sm font-medium text-stem-green">✓ Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Criteria:</span>
                    <span className="text-sm font-medium">Ready for evaluation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)] mb-8">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                Complete your assessment workflow with backend functionality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    🔄 For Complete Assessment Workflow:
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    To save assessments, manage user data, integrate with LLM APIs, and track evaluation results, you'll need backend functionality. 
                    Connect to Supabase to add database storage, user authentication, and API integrations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-stem-blue/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-stem-blue font-semibold">1</span>
                    </div>
                    <h5 className="font-medium text-sm mb-1">Save Assessments</h5>
                    <p className="text-xs text-muted-foreground">Store student prompts and rubrics</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-stem-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-stem-green font-semibold">2</span>
                    </div>
                    <h5 className="font-medium text-sm mb-1">LLM Integration</h5>
                    <p className="text-xs text-muted-foreground">Connect to Gemini 2.5 Pro API</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-stem-orange/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-stem-orange font-semibold">3</span>
                    </div>
                    <h5 className="font-medium text-sm mb-1">Evaluation Tracking</h5>
                    <p className="text-xs text-muted-foreground">Score and analyze results</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" disabled>
              <Download className="w-4 h-4 mr-2" />
              Export Assessment
            </Button>
            <Button variant="outline" size="lg" disabled>
              <Share className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg">
                <RotateCcw className="w-4 h-4 mr-2" />
                Start New Assessment
              </Button>
            </Link>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Backend functionality required for full assessment workflow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletePage;