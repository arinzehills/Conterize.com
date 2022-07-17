import {
  CardElement,
  Elements,
  ElementsConsumer,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useUser from "../../useUser";
import { Button } from "../Button/Button";
import InputField from "../Inputfield/InputField";
import Loader from "../Loader/Loader";
import "./Payment.css";
import Review from "./Review";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "black",
      fontWeight: "500px",
      fontFamily: "Roboto, Open Sans, Sergio UI,sans-serif",
      fontSize: "16px",
      fontSmothing: "antialised",
      ":webkit-autofill": { color: "var(--light-purple)" },
      "::placeholder": { color: "var(--light-purple)" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const Payment = ({ next, back, planData }) => {
  const [review, SetReview] = useState(false);
  const [success, SetSuccess] = useState(false);
  const { user, setUser } = useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: user?.["firstname"] + " " + user?.["lastname"],
        email: "arinzehill@gmail.com",
      },
    });
    const url = window.baseUrl + "subscribe";

    setLoading(true);
    if (!error) {
      try {
        const payment_method_id = paymentMethod;
        console.log(payment_method_id);
        const data = {
          payment_method_id: payment_method_id.id,
          email: "arinzehill@gmail.com",
          user_id: user?.["id"],
          firstname: user?.["firstname"],
          lastname: user?.["lastname"],
          plan_name: planData.heading,
        };
        console.log("no error");
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            //   // Accept: "application/json",
            //   // 'Authorization': 'http://localhost:8000/api/user',
          },
          method: "POST",
          body: JSON.stringify(data),
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            // console.log( data['token']);

            if (data.success) {
              //if is true

              console.log("Successful Payment");
              setLoading(false);
              next();
            } else {
              setResponseError(data.message);
              setLoading(false);
            }
            // console.log('Success:', data);
          })
          .catch((error) => {
            console.warn("Error:", error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
      setResponseError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div style={{ height: "60%", marginTop: "3rem" }}>
          <Loader
            position={"relative"}
            description={"Processing please wait!"}
          />
        </div>
      ) : (
        <div>
          <div className={review ? "payment none" : "payment"}>
            {/* <div> */}
            <InputField
              inputStyle="input--outline"
              label="Enter full name"
              // style={{ width: "93.5%" }}
              value={user?.["firstname"] + " " + user?.["lastname"]}
              readonly={true}
            />
            <InputField
              inputStyle="input--outline"
              label="Enter email address"
              // style={{ width: "93.5%" }}
              readonly={true}
              value={user?.["email"]}
            />
            <InputField
              inputStyle="input--outline"
              label="Enter email address"
              // style={{ width: "93.5%" }}
              readonly={true}
              value={"Plan: " + planData.heading}
            />
            <InputField
              inputStyle="input--outline"
              label="Enter email address"
              // style={{ width: "93.5%" }}
              readonly={true}
              value={"Price: " + planData.price}
            />
            {/* <InputField
              inputStyle="input--outline"
              label="Enter email address"
              // style={{ width: "93.5%" }}
              readonly={true}
              value={"Contents: " + planData.desc[0]}
            /> */}
          </div>

          <Review
            firstname={user?.firstname}
            lastname={user?.lastname}
            email={user?.email}
            planData={planData}
            className={
              !review
                ? "review-order-container"
                : "review-order-container activeShow"
            }
          />
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form action="">
                <div
                  style={{
                    padding: "0.8rem",
                    border: "1.2px solid rgb(193, 189, 189",
                    marginTop: "1rem",
                  }}
                >
                  <CardElement options={CARD_OPTIONS} />
                </div>
                <p className="errors">{responseError ?? ""}</p>
              </form>
            )}
          </ElementsConsumer>
        </div>
      )}
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
          // onClick={next}
          onClick={handleSubmit}
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
