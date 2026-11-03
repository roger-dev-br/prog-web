import MenuItem from "./MenuItem";
import Pastor from "../assets/pa-001.png"
import Golden from "../assets/gr-001.png"
import RotW from "../assets/rw-001.png"

function Menu() {
    return (
        <nav>
            <ul>
                <MenuItem nome="Pastor Alemão" foto={Pastor} />
                <MenuItem nome="Golden Retriever" foto={Golden} />
                <MenuItem nome="Rottweiler" foto={RotW} />
            </ul>
        </nav>
    )
}

export default Menu;