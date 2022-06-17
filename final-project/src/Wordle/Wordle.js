import React, {useEffect, useState} from 'react';
import db from '../db';
import Keyboard from "./Keyboard";
import Tiles from "./Tiles";
const RANDOM_BASE_URL = `https://random-word-api.herokuapp.com/word?number=100&swear=0`;
const DICTIONARY_BASE_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/`;

export default function Wordle() {
    const [letters, setLetters] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [remaining, setRemaining] = useState(6);
    const [answer, setAnswer] = useState([]);
    let fiveLetterWord = 'THERE';

    // useEffect(()=> {
    //     fetch(RANDOM_BASE_URL)
    //     .then(function(data){
    //         return data.json();
    //     })
    //     .then(function(responseJson) {
    //         for (let i = 0; i < responseJson.length; i++){
    //             if (responseJson[i].length === 5) {
    //                 fiveLetterWord = responseJson[i];
    //                 break;
    //             }
    //         }
    //         setAnswer(fiveLetterWord.split(''));
    //         console.log(answer);
    //     }); 
    // }, []);

    // const url = `${DICTIONARY_BASE_URL}${wordInput.value}?key=${API_KEY}`;
    // let wordMatch = false;

    // fetch(url)
    // .then(function(data){
    //     return data.json();
    // })
    // .then(function(responseJson) {
    //     if (typeof(responseJson[0]) !== 'string' && responseJson.length > 0) {
    //         wordMatch = true;
    //     };
    //     if (wordMatch === true) {
    //         wordInput.setCustomValidity('');
    //         checkAnswer(e);
    //     } else {
    //         wordInput.setCustomValidity('This is not a valid word');
    //         wordInput.reportValidity();
    //     };
    // });

    const selectKey = (key) => {
        if (letters.length < 5) {
            setLetters([...letters, key]);
        }
    }

    const removeKey = () => {
        if (letters.length > 0) {
            setLetters(letters.slice(0, -1));
        }
    }

    const enterKey = () => {
        if (remaining > 0) {
            if (letters.length === 5) {
                setAttempts(attempts.slice(1));
                setAttempts(attempts => [...attempts, letters]);
                setLetters('');
                setRemaining(remaining - 1);
            }
            // checkCharacters();
        }
    }

    // useEffect(() => {
    //     if (letters !== '') {
    //         setAttempts(attempts => [letters]);
    //     }
    // }, [letters]);

    console.log(letters);
    console.log(attempts);

    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            if (attempts.length != 6) {
                setAttempts(attempts => [...attempts, ['']]);
            }
        }
    }, []);
    
    return ( 
        <div>
            {/* Play Wordle! */}
            <div>
                <Tiles 
                    letters = {letters}
                    attempts = {attempts}
                />
            </div>
            <div>
                <Keyboard 
                    selectKey = {selectKey}
                    removeKey = {removeKey}
                    enterKey = {enterKey}
                />
            </div>
        </div>
    )
}