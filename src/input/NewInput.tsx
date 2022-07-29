import {MessageType} from "../App";
// import {FullInput} from "./FullInput/FullInput";
import {JustInput} from "./JustInput/JustInput";
import {JustInputButton} from "./JustInputButton/JustInputButton";
import {useState} from "react";

type NewInputPropsType = {
    message: MessageType[]
    addMessage: (newMessage: MessageType) => void
}

export const NewInput = (props: NewInputPropsType) => {
    const [inputValue, setInputValue] = useState<string>("")
    const onClickButtonHandler = () => {
        props.addMessage({"message": inputValue})
        setInputValue("");
    }
    return <div>
        {/*<FullInput addMessage = {props.addMessage}/>*/}
        <div>
            <JustInput setTitle={setInputValue} value={inputValue}/>
            <JustInputButton name="+" callBack={onClickButtonHandler}/>
        </div>
        {props.message.map((el, index) => <div key={index}>{el.message}</div>)}
    </div>
}