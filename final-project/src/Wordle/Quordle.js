import Keyboard from "./Keyboard";
import Tiles from "./Tiles";

export default function Quordle() {
    return ( 
        <div>
            {/* Play Quordle! */}
            <div>{Tiles()}</div>
            <div>{Keyboard()}</div>
        </div>
    )
}