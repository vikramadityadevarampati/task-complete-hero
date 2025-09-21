import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Target, Trash2, CheckCircle } from "lucide-react";

interface Criterion {
  id: string;
  description: string;
  source: string;
  weight: string;
  type: string;
  dependency: string;
  points: number;
  checkMethod: string;
}

const RubricBuilder = () => {
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [newCriterion, setNewCriterion] = useState<Partial<Criterion>>({
    description: "",
    source: "Prompt",
    weight: "Primary",
    type: "Compliance",
    dependency: "—",
    points: 8,
    checkMethod: "",
  });

  const addCriterion = () => {
    if (newCriterion.description && newCriterion.checkMethod) {
      const criterion: Criterion = {
        id: Date.now().toString(),
        description: newCriterion.description || "",
        source: newCriterion.source || "Prompt",
        weight: newCriterion.weight || "Primary",
        type: newCriterion.type || "Compliance",
        dependency: newCriterion.dependency || "—",
        points: newCriterion.points || 8,
        checkMethod: newCriterion.checkMethod || "",
      };
      setCriteria([...criteria, criterion]);
      setNewCriterion({
        description: "",
        source: "Prompt",
        weight: "Primary",
        type: "Compliance",
        dependency: "—",
        points: 8,
        checkMethod: "",
      });
    }
  };

  const removeCriterion = (id: string) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const totalPoints = criteria.reduce((sum, c) => sum + c.points, 0);

  const exampleCriteria = [
    {
      description: "Exactly 6 problems are listed",
      source: "Prompt",
      weight: "Primary",
      type: "Compliance",
      points: 8,
      checkMethod: "Count items 1–6 before solutions",
    },
    {
      description: "Topic split matches 2 mod, 2 dioph, 1 mult.func, 1 comb.NT",
      source: "Prompt", 
      weight: "Primary",
      type: "Compliance",
      points: 10,
      checkMethod: "Check topic labels",
    },
    {
      description: "Each solution ≤ 150 words",
      source: "Prompt",
      weight: "Primary", 
      type: "Style",
      points: 8,
      checkMethod: "Spot-check word count",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Part 2: Evaluation Rubric</h2>
          <p className="text-xl text-muted-foreground">
            Create 10-20 atomic, objective criteria to evaluate the LLM's response
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Criterion Builder */}
          <div className="lg:col-span-1">
            <Card className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)] sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-stem-orange" />
                  Add Criterion
                </CardTitle>
                <CardDescription>
                  Create atomic, yes/no evaluation criteria
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Criterion Description</Label>
                  <Textarea
                    id="description"
                    placeholder="e.g., Exactly 6 problems are listed"
                    value={newCriterion.description}
                    onChange={(e) => setNewCriterion({...newCriterion, description: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Source</Label>
                    <Select value={newCriterion.source} onValueChange={(value) => setNewCriterion({...newCriterion, source: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Prompt">Prompt</SelectItem>
                        <SelectItem value="Context">Context</SelectItem>
                        <SelectItem value="Quality">Quality</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Weight</Label>
                    <Select value={newCriterion.weight} onValueChange={(value) => setNewCriterion({...newCriterion, weight: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Primary">Primary</SelectItem>
                        <SelectItem value="Secondary">Secondary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select value={newCriterion.type} onValueChange={(value) => setNewCriterion({...newCriterion, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Compliance">Compliance</SelectItem>
                        <SelectItem value="Style">Style</SelectItem>
                        <SelectItem value="Accuracy">Accuracy</SelectItem>
                        <SelectItem value="Reasoning">Reasoning</SelectItem>
                        <SelectItem value="Sources">Sources</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Points</Label>
                    <Input
                      type="number"
                      min="1"
                      max="20"
                      value={newCriterion.points}
                      onChange={(e) => setNewCriterion({...newCriterion, points: parseInt(e.target.value) || 8})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>How to Check</Label>
                  <Input
                    placeholder="e.g., Count items 1–6 before solutions"
                    value={newCriterion.checkMethod}
                    onChange={(e) => setNewCriterion({...newCriterion, checkMethod: e.target.value})}
                  />
                </div>

                <Button onClick={addCriterion} variant="criterion" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Criterion
                </Button>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-sm">
                    <span>Total Criteria:</span>
                    <Badge variant="secondary">{criteria.length}</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span>Total Points:</span>
                    <Badge variant={totalPoints === 100 ? "default" : "destructive"}>
                      {totalPoints}/100
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rubric Table */}
          <div className="lg:col-span-2">
            <Card className="bg-[var(--gradient-card)] border-0 shadow-[var(--shadow-elegant)]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-stem-green" />
                    Assessment Rubric
                  </span>
                  <Badge variant={criteria.length >= 10 ? "default" : "secondary"}>
                    {criteria.length}/10-20 criteria
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Atomic, objective criteria for evaluating the LLM response
                </CardDescription>
              </CardHeader>
              <CardContent>
                {criteria.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No criteria added yet. Start building your rubric!</p>
                    
                    <div className="mt-8">
                      <h4 className="font-medium mb-4">Example Criteria:</h4>
                      <div className="space-y-2">
                        {exampleCriteria.map((example, index) => (
                          <div key={index} className="text-left bg-muted/50 p-3 rounded text-sm">
                            <div className="font-medium">{example.description}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {example.type} • {example.points} pts • {example.checkMethod}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-8">#</TableHead>
                          <TableHead>Criterion</TableHead>
                          <TableHead className="w-20">Source</TableHead>
                          <TableHead className="w-20">Weight</TableHead>
                          <TableHead className="w-20">Type</TableHead>
                          <TableHead className="w-16">Pts</TableHead>
                          <TableHead>How to Check</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {criteria.map((criterion, index) => (
                          <TableRow key={criterion.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="font-medium">{criterion.description}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {criterion.source}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant={criterion.weight === "Primary" ? "default" : "secondary"} className="text-xs">
                                {criterion.weight}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {criterion.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-mono">{criterion.points}</TableCell>
                            <TableCell className="text-sm">{criterion.checkMethod}</TableCell>
                            <TableCell>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => removeCriterion(criterion.id)}
                                className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RubricBuilder;