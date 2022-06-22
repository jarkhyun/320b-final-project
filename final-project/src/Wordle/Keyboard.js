export default function Keyboard({selectKey, removeKey, enterKey}) {

    return ( 
            <div id="VirtualKey">
                <div className="row">
                    <input id="btnQ" className="key" type="button" value="Q" onClick={() => selectKey('Q')}/>
                    <input id="btnW" className="key" type="button" value="W" onClick={() => selectKey('W')}/>
                    <input id="btnE" className="key" type="button" value="E" onClick={() => selectKey('E')}/>
                    <input id="btnR" className="key" type="button" value="R" onClick={() => selectKey('R')}/>
                    <input id="btnT" className="key" type="button" value="T" onClick={() => selectKey('T')}/>
                    <input id="btnY" className="key" type="button" value="Y" onClick={() => selectKey('Y')}/>
                    <input id="btnU" className="key" type="button" value="U" onClick={() => selectKey('U')}/>
                    <input id="btnI" className="key" type="button" value="I" onClick={() => selectKey('I')}/>
                    <input id="btnO" className="key" type="button" value="O" onClick={() => selectKey('O')}/>
                    <input id="btnP" className="key" type="button" value="P" onClick={() => selectKey('P')}/>
                </div>
                <div className="row">
                    <input id="btnA" className="key" type="button" value="A" onClick={() => selectKey('A')}/>
                    <input id="btnS" className="key" type="button" value="S" onClick={() => selectKey('S')}/>
                    <input id="btnD" className="key" type="button" value="D" onClick={() => selectKey('D')}/>
                    <input id="btnF" className="key" type="button" value="F" onClick={() => selectKey('F')}/>
                    <input id="btnG" className="key" type="button" value="G" onClick={() => selectKey('G')}/>
                    <input id="btnH" className="key" type="button" value="H" onClick={() => selectKey('H')}/>
                    <input id="btnJ" className="key" type="button" value="J" onClick={() => selectKey('J')}/>
                    <input id="btnK" className="key" type="button" value="K" onClick={() => selectKey('K')}/>
                    <input id="btnL" className="key" type="button" value="L" onClick={() => selectKey('L')}/>
                </div>
                <div className="row">
                    <input id="btnEnt" className="big-key" type="submit" value="Enter" onClick={() => enterKey()}/>
                    <input id="btnZ" className="key" type="button" value="Z" onClick={() => selectKey('Z')}/>
                    <input id="btnX" className="key" type="button" value="X" onClick={() => selectKey('X')}/>
                    <input id="btnC" className="key" type="button" value="C" onClick={() => selectKey('C')}/>
                    <input id="btnV" className="key" type="button" value="V" onClick={() => selectKey('V')}/>
                    <input id="btnB" className="key" type="button" value="B" onClick={() => selectKey('B')}/>
                    <input id="btnN" className="key" type="button" value="N" onClick={() => selectKey('N')}/>
                    <input id="btnM" className="key" type="button" value="M" onClick={() => selectKey('M')}/>
                    <input id="btnDel" className="big-key" type="button" value="&#129056;" onClick={() => removeKey()}/>
                </div>
            </div>
    )
}