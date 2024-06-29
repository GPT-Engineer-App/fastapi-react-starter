import React, { useState } from 'react';
import SubscriptionPlans from '../components/SubscriptionPlans';
import CheckoutForm from '../components/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleSuccessfulCheckout = () => {
    console.log('Checkout successful');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!selectedPlan ? (
        <SubscriptionPlans onSelectPlan={handleSelectPlan} />
      ) : (
        <Elements stripe={stripePromise}>
          <CheckoutForm onSuccessfulCheckout={handleSuccessfulCheckout} />
        </Elements>
      )}
    </div>
  );
};

export default SubscriptionPage;