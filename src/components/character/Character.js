import Image from "next/image";
import { useRouter } from "next/router";

import { characterContainer, gender, name } from "./Character.module.css";

const Character = ({ character, isFromDetail }) => {
    const router = useRouter();

    const handleNav = () => {
        if (!isFromDetail) {
            router.push(`character/${character.id}`);
        }
    };

    return (
        <>
            <div className={characterContainer} onClick={handleNav}>
                <Image
                    src={character.image}
                    alt={character.name}
                    width={250}
                    height={250}
                />
                <p className={name}>{character.name}</p>
                <span className={gender}>{character.gender}</span>
            </div>
        </>
    );
};

export default Character;
