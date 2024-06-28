import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@/components/ui";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-center text-3xl font-extrabold">Create your account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
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
          <Button type="submit" className="w-full">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;