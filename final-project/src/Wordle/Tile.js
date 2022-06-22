export default function TileRow({index, letter, array, displayProgress}) {

    const classNames = displayProgress(index, letter, array);
    
    return ( 
        <div className={classNames}>
            <p className="text">{letter}</p>
        </div>
    )
}