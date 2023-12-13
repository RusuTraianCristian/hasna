import { useRouter } from "next/router";

const Order = () => {
	const { asPath } = useRouter();

	return (
		<>
			<h1>page displaying a specific order / dynamic route</h1>
			<span>show a single order: { asPath }</span>
		</>
	);
};

export default Order;
