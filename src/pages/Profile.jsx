import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@/components/ui";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [displayName, setDisplayName] = React.useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = React.useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    await user.updateProfile({ displayName, photoURL });
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-center text-3xl font-extrabold">Update your profile</h2>
        <form className="mt-8 space-y-6" onSubmit={handleUpdateProfile}>
          <Input
            name="displayName"
            type="text"
            required
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Input
            name="photoURL"
            type="text"
            required
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <Button type="submit" className="w-full">Update Profile</Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;