import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SubscriptionPlans = ({ onSelectPlan }) => {
  const plans = [
    { id: 'monthly', name: 'Monthly Plan', price: 10 },
    { id: 'yearly', name: 'Yearly Plan', price: 96 }, // 20% discount
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      {plans.map((plan) => (
        <Card key={plan.id} className="w-80">
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>${plan.price}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => onSelectPlan(plan.id)}>Select</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SubscriptionPlans;