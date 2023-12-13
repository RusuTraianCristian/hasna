import usePaymentService, { getPaymentProviders } from "@/services/payment/payment.service";
import { PaymentProviders } from '@/types';

const Payment = () => {
	// assuming we have a steps-based purchase flow, the logic would be as follows (aprox.):
	// after a user inserts products into a cart, one of the next steps would be 'finalize order' or whatever
	// this will send the user on the /payment page (here) in order for them to pay
	// this page would contain logic to create a 'paymentData' object
	// which will contain information such as price and currency
	// based on whatever data it gets from a redux store/selector
	// for example, when we add items into a cart, we would lift that information into state (presumable a redux store)
	// using a redux selector we'd know information about the price and currency and whatnot
	// we then create the paymentData object with price currency etc.
	// and with that, we're gonna call the payment service and pass that info to it

	// call the payment service and get a list of all available payment providers
	const paymentProviders: PaymentProviders[] = getPaymentProviders();
	
	// assuming the user has selected a provider from the dropdown list
	// and assuming we put that provider into this components state, for example: [selectedProvider]

	// now that selectedProvider is not null, a complete payment button would be enabled
	// its onClick handler would try to complete the payment

	const selectedProvider = 'Stripe'; // this would be a state variable as mentioned above
	// call the usePaymentService with this valid provider
	const paymentService = usePaymentService(selectedProvider);
	// not going deep with examples of payload data for the payment, a price/amount will suffice
	const TOTAL_AMOUNT_DUE: number = 50;
	// handle the payment response
	const paymentReponse = paymentService.processOrder(TOTAL_AMOUNT_DUE);

	return (
		// create something like a dropdown select or radio buttons for each and allow user to choose one provider
		<>
			{
				paymentProviders.map((provider: PaymentProviders, idx) => (<h1 key={ idx }>{ provider }</h1>))
			}
		</>
	);
};

export default Payment;
