import type { NextPage } from "next";
import { useState } from "react";
import { apiClient } from "../api/cat";
import type { Image } from "../api/cat/types";
import styles from "./index.module.css";

type Props = {
	initialImageUrl: string;
};

const IndexPage: NextPage<Props> = (props) => {
	const { initialImageUrl } = props;
	const [imageUrl, setImageUrl] = useState(initialImageUrl);
	const [loading, setLoading] = useState(false);
	const handleClick = async () => {
		setLoading(true);
		const newImages = await apiClient.search();
		setImageUrl(newImages[0].url);
		setLoading(false);
	};
	return (
		<div className={styles.page}>
			<button type="button" onClick={handleClick} className={styles.button}>
				See other cats!
			</button>
			<div className={styles.frame}>
				{loading || <img src={imageUrl} alt="cat images" className={styles.img} />}
			</div>
		</div>
	);
};
export default IndexPage;

export const getServerSideProps = async () => {
	const images: Image[] = await apiClient.search();
	const props = {
		initialImageUrl: images[0].url,
	};
	return { props };
};
