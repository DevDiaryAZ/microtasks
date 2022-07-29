import {ChangeEvent, useState} from "react";
import {MessageType} from "../../App";

type FullInputPropsType = {
    addMessage: (newMessage: MessageType) => void
}

export const FullInput = (props: FullInputPropsType) => {
    const [inputValue, setInputValue] = useState<string>("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage({"message": inputValue})
        setInputValue("");
    }

    return (<div>
        <input type="text" onChange={onChangeInputHandler} value = {inputValue}/>
        <button onClick={onClickButtonHandler}>+</button>
    </div>)
}