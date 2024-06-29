import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userHasSubscription = false; // Replace with actual subscription check

    if (userHasSubscription) {
      navigate('/configuration');
    } else {
      navigate('/subscription');
    }
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Your Blank Canvas</h1>
        <p className="text-center">
          Chat with the agent to start making edits.
        </p>
      </div>
    </div>
  );
};

export default Index;
