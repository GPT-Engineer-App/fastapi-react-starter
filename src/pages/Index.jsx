import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Your Blank Canvas</h1>
        <p className="text-center">
          Chat with the agent to start making edits.
        </p>
        <Button onClick={() => navigate("/login")} className="w-full mt-4">Login</Button>
        <Button onClick={() => navigate("/register")} className="w-full mt-4">Register</Button>
      </div>
    </div>
  );
};

export default Index;
