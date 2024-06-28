import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubscription = async (plan) => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan }),
    });

    const session = await response.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-center text-3xl font-extrabold">Choose your plan</h2>
        <Button onClick={() => handleSubscription("monthly")} className="w-full">Monthly - $10</Button>
        <Button onClick={() => handleSubscription("yearly")} className="w-full mt-4">Yearly - $96 (20% off)</Button>
      </div>
    </div>
  );
};

export default Subscription;