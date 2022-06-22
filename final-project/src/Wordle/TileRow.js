import Tile from './Tile';

export default function TileRow({attempt, displayProgress}) {

    const tiles = attempt.map((letter, index, array) =>
        <Tile
            key = {index}
            index = {index}
            letter = {letter}
            array = {array}
            displayProgress = {displayProgress}
        />
    )

    return ( 
        <div className='row'>
            {tiles}
        </div>

    )
}