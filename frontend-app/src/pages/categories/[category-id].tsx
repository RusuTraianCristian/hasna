import { useRouter } from "next/router";

const Category = () => {
	const { asPath } = useRouter();

	return (
		<>
			<h1>page displaying a specific category / dynamic route</h1>
			<span>Current category: { asPath }</span>
		</>
	);
};

export default Category;
