import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/wordle">Wordle</Link></li>
                {/* <li><Link to="/quordle">Quordle</Link></li> */}
            </ul>
        </div>
    )
}