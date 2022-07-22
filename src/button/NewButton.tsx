// import {MouseEvent} from 'react';

type NewButtonType = {
    name: string
    callback: () => void
}

export const NewButton = (props: NewButtonType) => {
    // const onClickHandler=(name:string)=>{
    //     console.log(name)
    // }
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <>
            <button onClick={onClickHandler}>
                {props.name}
            </button>
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>{onClickHandler('Ivan')}}>*/}
            {/*</button>*/}
        </>
    )
}