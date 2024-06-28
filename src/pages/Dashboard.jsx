import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-center text-3xl font-extrabold">Welcome to your dashboard</h2>
        <Button onClick={() => navigate("/profile")} className="w-full">Go to Profile</Button>
        <Button onClick={() => navigate("/special")} className="w-full mt-4">Go to Special Page</Button>
      </div>
    </div>
  );
};

export default Dashboard;