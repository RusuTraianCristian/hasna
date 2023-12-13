import { PaymentProviders } from '@/types';
import {
	StripePaymentProcessor,
	BraintreePaymentProcessor,
	PayPalPaymentProcessor,
} from './providers';

const paymentProviders = {
	Stripe: StripePaymentProcessor,
	Braintree: BraintreePaymentProcessor,
	PayPal: PayPalPaymentProcessor,
};

const paymentProvidersList: PaymentProviders[] = [
	PaymentProviders.Stripe,
	PaymentProviders.Braintree,
	PaymentProviders.PayPal,
];

export const getPaymentProviders = (): PaymentProviders[] => {
	return paymentProvidersList;
};

class PaymentService {
	private paymentProcessor;

	constructor (paymentProvider: keyof typeof PaymentProviders) {
		this.paymentProcessor = paymentProviders[paymentProvider];
	}

	processOrder (amount: number) {
		if (!this.paymentProcessor) {
			throw new Error('Payment processor not set');
		}

		const processor = new this.paymentProcessor();
		processor.processPayment(amount);
	}
}


let paymentService: PaymentService;

export default function usePaymentService (provider: keyof typeof PaymentProviders): PaymentService {
	if (!paymentService) {
		paymentService = new PaymentService(provider);
	}

	return paymentService;
};

// this uses the the Strategy Pattern
// as required, it is extensible, which means we can easily add or remove providers
// to add a new provider such as...say ChargeBee, go to @services/payment/providers
// create a new class for the new provider and be sure to export it for availability in index.ts
// add the newly added provider into the enum of providers, found under types/enums
// add to paymentProviders and paymentProvidersList
// that's it