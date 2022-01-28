import Head from "next/head";

import Character from "../components/character/Character";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
    const { results } = data;

    return (
        <div className={styles.container}>
            <Head>
                <title>Rick and Morty Info</title>
                <meta name="description" content="Rick and mory info app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.charatersWrapper}>
                {results.map((result) => (
                    <div key={result.id}>
                        <Character character={result} />
                    </div>
                ))}
            </section>
        </div>
    );
}

export async function getServerSideProps() {
    const url = "https://rickandmortyapi.com/api/character";

    const response = await fetch(`${url}`);
    const data = await response.json();

    return {
        props: { data },
    };
}
