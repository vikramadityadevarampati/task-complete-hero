import AssessmentHeader from "@/components/AssessmentHeader";
import StudentSimulation from "@/components/StudentSimulation";
import RubricBuilder from "@/components/RubricBuilder";

const Index = () => {
  return (
    <main className="min-h-screen">
      <AssessmentHeader />
      <StudentSimulation />
      <RubricBuilder />
    </main>
  );
};

export default Index;