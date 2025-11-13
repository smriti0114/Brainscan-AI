import { AlertCircle, CheckCircle, Brain, MapPin, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AnalysisResultProps {
  result: {
    tumorDetected: boolean;
    confidence: number;
    tumorType?: string | null;
    location?: string | null;
    analysis: string;
    recommendation: string;
  };
}

export const AnalysisResult = ({ result }: AnalysisResultProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-600";
    if (confidence >= 60) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="p-6 shadow-medical">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${
            result.tumorDetected ? 'bg-orange-100 dark:bg-orange-950' : 'bg-green-100 dark:bg-green-950'
          }`}>
            {result.tumorDetected ? (
              <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              {result.tumorDetected ? 'Tumor Detected' : 'No Tumor Detected'}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">Confidence:</span>
              <span className={`text-lg font-bold ${getConfidenceColor(result.confidence)}`}>
                {result.confidence}%
              </span>
            </div>
          </div>
        </div>
      </Card>

      {result.tumorDetected && (result.tumorType || result.location) && (
        <div className="grid md:grid-cols-2 gap-4">
          {result.tumorType && (
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <Brain className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Tumor Type</p>
                  <p className="font-semibold">{result.tumorType}</p>
                </div>
              </div>
            </Card>
          )}
          {result.location && (
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold">{result.location}</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}

      <Card className="p-6">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          Detailed Analysis
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {result.analysis}
        </p>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Medical Disclaimer:</strong> {result.recommendation}
        </AlertDescription>
      </Alert>
    </div>
  );
};
