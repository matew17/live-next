import { useRouter } from "next/router";

import { goBackBtn } from "./../../styles/CharcterDetail.module.css";

import Character from "../../components/character/Character";

const CharacterDetail = ({ data }) => {
    const router = useRouter();

    return (
        <div>
            <button className={goBackBtn} onClick={router.back}>
                Go Back
            </button>
            <Character isFromDetail character={data} />
        </div>
    );
};

export default CharacterDetail;

export async function getServerSideProps({ params }) {
    const url = "https://rickandmortyapi.com/api/character";
    const { id } = params;

    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    return {
        props: { data },
    };
}
