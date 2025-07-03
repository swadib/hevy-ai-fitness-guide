import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DashboardPreview from "@/components/dashboard/DashboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
    </div>
  );
};

export default Index;
