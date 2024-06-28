import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Special = () => {
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
        <h2 className="text-center text-3xl font-extrabold">Welcome to the special page</h2>
        <Button onClick={() => navigate("/dashboard")} className="w-full">Go to Dashboard</Button>
      </div>
    </div>
  );
};

export default Special;