import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';

export default function Nav() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/wordle">Wordle</Link></li>
                {/* <li><Link to="/quordle">Quordle</Link></li> */}
            </ul>
            {user ? (
                <div>
                    <p>{user.displayName}</p>
                    <button
                        onClick={() => {
                            firebase.auth().signOut();
                            navigate('/');
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div>
                    <Link to ="/">Sign In</Link>
                </div>
            )}
        </div>
    )
}