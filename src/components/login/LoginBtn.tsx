"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Zap } from "lucide-react";
import { signIn } from "next-auth/react";

const LoginBtn = () => {
  const handleGoogleSignIn = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-md">
        <Card className="border shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                Welcome to ArkLab
              </CardTitle>
              <CardDescription className="mt-2">
                Sign in to access our comprehensive AI Agent Catalog
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Zap className="w-4 h-4 text-primary" />
                <span>Discover powerful AI agents</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure authentication with Google</span>
              </div>
            </div>

            <Button
              className="w-full h-12 cursor-pointer"
              size="lg"
              onClick={handleGoogleSignIn}
            >
              <span className="text-2xl font-bold">G</span> Continue with Google
            </Button>

            <p className="text-xs text-center text-zinc-500">
              By signing in, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginBtn;
