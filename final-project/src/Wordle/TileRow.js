export default function TileRow({letters, attempt}) {

    // if (letters !== '') {
    //     return (
    //         <div className='row'>
    //             <div className="square">
    //                 <p className="text">{letters[0]}</p>
    //             </div>
    //             <div className="square">
    //                 <p className="text">{letters[1]}</p>
    //             </div>
    //             <div className="square">
    //                 <p className="text">{letters[2]}</p>
    //             </div>
    //             <div className="square">
    //                 <p className="text">{letters[3]}</p>
    //             </div>
    //             <div className="square">
    //                 <p className="text">{letters[4]}</p>
    //             </div>
    //         </div>
    //     )
    // }
    
    return ( 
            <div className='row'>
                <div className="square">
                    <p className="text">{attempt[0]}</p>
                </div>
                <div className="square">
                    <p className="text">{attempt[1]}</p>
                </div>
                <div className="square">
                    <p className="text">{attempt[2]}</p>
                </div>
                <div className="square">
                    <p className="text">{attempt[3]}</p>
                </div>
                <div className="square">
                    <p className="text">{attempt[4]}</p>
                </div>
            </div>
    )
}