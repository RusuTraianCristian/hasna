import { useRouter } from "next/router";

const Product = () => {
	const { asPath } = useRouter();

	return (
		<>
			<h1>page displaying a specific product / dynamic route</h1>
			<span>Current product: { asPath }</span>
		</>
	);
};

export default Product;
