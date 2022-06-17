import '../App.css';
import {useEffect, useState} from 'react';
import TileRow from './TileRow';

// import PropTypes from 'prop-types';
// {length, width}

export default function Tiles({letters, attempts}) {
    
    const allTiles = attempts.map((attempt, index) =>
        <TileRow 
            key = {index}
            letters = {letters}
            attempt = {attempt}
        />
    )

    // console.log(letters);
    // console.log(attempts);
    return ( 
        <div className='tiles'>
            {allTiles}
        </div>
    )
}

// Tiles.propTypes = {
//     length: PropTypes.number.isRequired,
//     width: PropTypes.number.isRequired
//   };