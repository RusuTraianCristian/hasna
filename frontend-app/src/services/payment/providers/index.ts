import { PaymentProviders } from '@/types';
import StripePaymentProcessor from './Stripe';
import BraintreePaymentProcessor from './Braintree';
import PayPalPaymentProcessor from './Paypal';

export const paymentProviders = {
	Stripe: StripePaymentProcessor,
	Braintree: BraintreePaymentProcessor,
	PayPal: PayPalPaymentProcessor,
};

export const paymentProvidersList: PaymentProviders[] = [
	PaymentProviders.Stripe,
	PaymentProviders.Braintree,
	PaymentProviders.PayPal,
];

export const getPaymentProviders = (): PaymentProviders[] => {
	return paymentProvidersList;
};
