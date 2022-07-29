// universal Input component
import {ChangeEvent} from "react";

type JustInputPropsType = {
    value: string
    setTitle: (value: string) => void
}

export const JustInput = (props: JustInputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input type="text" onChange={onChangeInputHandler} value={props.value}/>
    )
}