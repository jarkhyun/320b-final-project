import React, {useEffect, useState} from 'react';
import TileRow from './TileRow';

export default function AllTiles({attempts, displayProgress}) {

    const tiles = attempts.map((attempt, index) =>
        <TileRow 
            key = {index}
            attempt = {attempt}
            displayProgress = {displayProgress}
        />
    )
    
    return ( 
        <div className='tiles'>
            {tiles}
        </div>
    )
}