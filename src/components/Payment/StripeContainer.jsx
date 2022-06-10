import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";

// const stripePromise = loadStripe(process.env.APP_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(
  "pk_test_51KwinKEL7CF34u9QloS58YLEeNaPEUjdFdsIlqbcO5OPTyV2CGSgMmn5LZZGOACMRm64km6pKv6WTvgFgcv0ZXMh00EvCklSaW"
);
const StripeContainer = ({ next, back, planData }) => {
  return (
    <Elements stripe={stripePromise}>
      <Payment next={next} back={back} planData={planData} />
    </Elements>
  );
};

export default StripeContainer;
