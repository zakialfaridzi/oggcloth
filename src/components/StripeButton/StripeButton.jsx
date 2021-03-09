import React from "react";
import StripeCheckout from "react-stripe-checkout";
import img from "../../assets/og1.png";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ISaNGE0aB2emuByfQRJPBxp56roTvSo54bvMSjna5hQbONDLCLklE32y02U4EZjKuGz2eEiPbmmQGIzoJtLaEo300c6WfwHIR";

  const onToken = (token) => {
    console.log(token);
    alert("Payment success");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="OGCloth"
      billingAddress
      shippingAddress
      image={img}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Give Money"
      token={onToken}
      //   opened={onOpened}
      //   closed={onClosed}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
