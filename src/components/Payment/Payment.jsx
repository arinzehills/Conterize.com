import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import InputField from "../Inputfield/InputField";
import "./Payment.css";
import Review from "./Review";

const stripePromise = loadStripe(process.env.APP_STRIPE_PUBLIC_KEY);
// const stripePromise = loadStripe("pk_test_51KwinKEL7CF34u9QloS58YLEeNaPEUjdFdsIlqbcO5OPTyV2CGSgMmn5LZZGOACMRm64km6pKv6WTvgFgcv0ZXMh00EvCklSaW");

const Payment = ({ next, back }) => {
  const [review, SetReview] = useState(false);

  return (
    <>
      <div className={review ? "payment none" : "payment"}>
        <InputField
          inputStyle="input--outline"
          label="Enter full name"
          // style={{ width: "93.5%" }}
        />{" "}
        <InputField
          inputStyle="input--outline"
          label="Enter email address"
          // style={{ width: "93.5%" }}
        />
      </div>

      <Review
        className={
          !review
            ? "review-order-container"
            : "review-order-container activeShow"
        }
      />
      <Elements stripe={stripePromise}>
        <ElementsConsumer stripe={stripePromise}>
          {({ elements, stripe }) => (
            <form action="">
              <div
                style={{
                  padding: "0.8rem",
                  border: "1.2px solid rgb(193, 189, 189",
                  marginTop: "1rem",
                }}
              >
                <CardElement />
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
      {!review ? (
        <Button
          buttonColor="gradient"
          buttonSize="btn--large"
          style={{ width: "100%" }}
          onClick={() => SetReview(true)}
        >
          Review Order{" "}
        </Button>
      ) : (
        <Button
          buttonColor="gradient"
          buttonSize="btn--large"
          style={{ width: "100%" }}
          onClick={next}
        >
          Pay{" "}
        </Button>
      )}
      <Button
        // buttonColor="gradient"
        buttonStyle={"btn--outline"}
        buttonSize="btn--large"
        style={{ width: "100%" }}
        onClick={back}
      >
        Back{" "}
      </Button>
    </>
  );
};

export default Payment;
