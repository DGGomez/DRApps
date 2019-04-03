import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import PaymentForm from './PaymentForm';

class PaymentPage extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <PaymentForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default PaymentPage;
