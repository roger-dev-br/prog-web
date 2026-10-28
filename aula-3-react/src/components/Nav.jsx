import ImagemDestaque from "./ImagemDestaque";

import Golden from "../assets/gr-001.png";
import Pastor from "../assets/pa-001.png";
import RotW from "../assets/rw-001.png";

function Nav() {
    return (
        <nav>
            <ul>
                <ImagemDestaque nome="Golden Retriever" imagem={Golden} />
                <ImagemDestaque nome="Pastor Alemão" imagem={Pastor} />
                <ImagemDestaque nome="Rottweiler" imagem={RotW} />
            </ul>
        </nav>
    )
}

export default Nav;