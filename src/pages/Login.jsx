import React from "react";
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@/components/ui/button";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleGoogleLogin = async () => {
    await signInWithGoogle(provider);
    navigate("/dashboard");
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-center text-3xl font-extrabold">Sign in to your account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
          <Input
            name="email"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
        <Button onClick={handleGoogleLogin} className="w-full mt-4">Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;