import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Activity, ExternalLink } from "lucide-react";

const Auth = () => {
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user already has API key stored
    const storedApiKey = localStorage.getItem("hevy_api_key");
    if (storedApiKey) {
      navigate("/");
    }
  }, [navigate]);

  const validateHevyApiKey = async (key: string): Promise<boolean> => {
    try {
      // Test the API key by making a request to Hevy API
      const response = await fetch('https://api.hevyapp.com/v1/account', {
        headers: {
          'api-key': key,
          'Content-Type': 'application/json'
        }
      });
      
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!apiKey.trim()) {
        throw new Error("Please enter your Hevy API key");
      }

      // Validate the API key
      const isValidKey = await validateHevyApiKey(apiKey.trim());
      
      if (!isValidKey) {
        throw new Error("Invalid Hevy API key. Please check your key and try again.");
      }

      // Store the API key
      localStorage.setItem("hevy_api_key", apiKey.trim());
      
      toast({
        title: "Connected successfully!",
        description: "Your Hevy account has been connected.",
      });
      
      // Redirect to dashboard
      navigate("/dashboard");
      
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              HevyBuddy
            </span>
          </div>
          <CardTitle>Connect Your Hevy Account</CardTitle>
          <CardDescription>Enter your Hevy API key to connect your account and access your workout data</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleConnect} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="api-key">Hevy API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your Hevy API key..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
              />
              <p className="text-sm text-muted-foreground">
                Your API key is stored locally and used to connect to your Hevy account
              </p>
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Connecting..." : "Connect Hevy Account"}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              How to get your API key:
            </h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal ml-4">
              <li>Open the Hevy app on your phone</li>
              <li>Go to Settings → General → API</li>
              <li>Copy your API key and paste it above</li>
            </ol>
            <p className="text-xs text-muted-foreground mt-3">
              Need help? Visit the{" "}
              <a 
                href="https://support.hevyapp.com/api" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Hevy API documentation
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;