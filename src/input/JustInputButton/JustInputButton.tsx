// universal ButtonInput component
type JustInputButtonPropsType = {
    name: string
    callBack: () => void
}

export const JustInputButton = (props: JustInputButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}