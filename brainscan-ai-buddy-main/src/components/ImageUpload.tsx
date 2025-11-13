import { useState, useRef } from "react";
import { Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface ImageUploadProps {
  onAnalysisComplete: (result: any) => void;
}

export const ImageUpload = ({ onAnalysisComplete }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageData = e.target?.result as string;
      setPreview(imageData);
      await analyzeImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async (imageData: string) => {
    setIsAnalyzing(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analyze-brain-scan`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ imageData }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Analysis failed');
      }

      const result = await response.json();
      onAnalysisComplete(result);
      toast.success('Analysis complete!');
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to analyze image');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 ${
        isDragging ? 'border-primary shadow-medical' : 'border-border'
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="p-8">
        {preview ? (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={preview}
                alt="Brain scan preview"
                className="w-full h-64 object-contain bg-muted"
              />
              {isAnalyzing && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                    <p className="text-sm text-muted-foreground">Analyzing scan...</p>
                  </div>
                </div>
              )}
            </div>
            {!isAnalyzing && (
              <Button
                onClick={() => {
                  setPreview(null);
                  onAnalysisComplete(null);
                }}
                variant="outline"
                className="w-full"
              >
                Upload Another Scan
              </Button>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
              <Upload className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Upload Brain Scan</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drop your MRI or CT scan image here, or click to browse
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
              className="hidden"
            />
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="w-full"
            >
              Select Image
            </Button>
            <p className="text-xs text-muted-foreground">
              Supported formats: JPG, PNG, DICOM
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
