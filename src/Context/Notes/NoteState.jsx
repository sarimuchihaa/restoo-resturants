import NoteContext from "./NoteContext.jsx";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Sam",
        "age": "Seventeen"
    }
    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Sara",
                "age": "Eighteen"
            })
    }, 3000);
    }


    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;