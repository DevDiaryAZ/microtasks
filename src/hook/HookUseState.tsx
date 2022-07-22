import {useState} from "react";

export const HookUseState = () => {
    let [a,setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
    }
    const onClickZero = () => {
        a = 0
        setA(a);
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickZero}>0</button>
        </div>
    )
}