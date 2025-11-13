import { useState } from "react";
import { Brain, Shield, Zap } from "lucide-react";
import { ImageUpload } from "@/components/ImageUpload";
import { AnalysisResult } from "@/components/AnalysisResult";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Brain className="h-4 w-4" />
              AI-Powered Medical Imaging
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Brain Tumor Detection
              <span className="block text-primary mt-2">Powered by AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced artificial intelligence analyzing brain scans for tumor detection with high accuracy and speed
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="text-center p-6 rounded-xl bg-card shadow-sm border border-border transition-all hover:shadow-medical">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Instant Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get results in seconds with our advanced AI model
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card shadow-sm border border-border transition-all hover:shadow-medical">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">High Accuracy</h3>
            <p className="text-sm text-muted-foreground">
              Trained on extensive medical imaging datasets
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card shadow-sm border border-border transition-all hover:shadow-medical">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Secure & Private</h3>
            <p className="text-sm text-muted-foreground">
              Your medical data is processed securely and never stored
            </p>
          </div>
        </div>

        {/* Upload and Results Section */}
        <div className="max-w-3xl mx-auto space-y-8">
          <ImageUpload onAnalysisComplete={setAnalysisResult} />
          
          {analysisResult && <AnalysisResult result={analysisResult} />}
        </div>

        {/* Footer Disclaimer */}
        <div className="max-w-3xl mx-auto mt-16 p-6 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Important:</strong> This tool is for educational and research purposes only. 
            It should not be used as a substitute for professional medical diagnosis. 
            Always consult with qualified healthcare professionals for medical advice and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
