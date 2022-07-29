import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
// import {NewComponentMap} from "./map/NewComponentMap";
// import {NewButton} from "./button/NewButton";
// import {HookUseState} from "./hook/HookUseState";
// import {NewComponentFilter} from "./filter/NewComponentFilter";
import {useState} from "react";
import {NewInput} from "./input/NewInput";

// type FilterType = 'all' | 'Dollars' | 'RUBLS'
export type MessageType = {
    message: string
}

function App() {
    // ---***--- for NewComponentMap ---***---
    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]
    // const topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]
    // ---***--- end for NewComponentMap ---***---

    // ---***--- for NewButton ---***---
    // const Button1Foo = (subscriber: string, age: number) => {
    //     console.log(subscriber + ' age: ' + age)
    // }
    // const Button3Foo = () => {
    //     console.log("I am stupid button")
    // }
    // ---***--- end for NewButton ---***---

    // ---***--- for NewComponentFilter ---***---
    // const [money, setMoney] = useState([
    //     {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    // ])
    //
    // const [filter, setFilter] = useState<FilterType>('all')
    //
    // let currentMoney = money;
    //
    // if (filter === "Dollars") {
    //     currentMoney = money.filter(el => el.banknotes === "Dollars")
    // }
    // if (filter === "RUBLS") {
    //     currentMoney = money.filter(el => el.banknotes === "RUBLS")
    // }
    //
    // const onClickFilterHandler = (buttonName: FilterType) => {
    //     setFilter(buttonName)
    // }
    // ---***--- end for NewComponentFilter ---***---

    // ---***--- for NewInput ---***---
    const [message, setMessage] = useState<MessageType[]>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (newMessage: MessageType) => {
        setMessage([newMessage,...message])
    }
    // ---***--- end for NewInput ---***---

    return (
        <>
            {/*<Header title={'NEW TITLE'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}
            {/*<NewComponentMap students={students} topCars={topCars}/>*/}
            {/*<NewButton name={'MyYouTubeChannel-1'} callback={()=>Button1Foo('I am Vasya!', 21)}/>*/}
            {/*<NewButton name={'MyYouTubeChannel-2'} callback={()=>Button1Foo('I am Ivan!', 35)}/>*/}
            {/*<NewButton name={'MyYouTubeChannel-3'} callback={Button3Foo}/>*/}
            {/*<HookUseState/>*/}
            {/*<NewComponentFilter currentMoney = {currentMoney} onClickFilterHandler={onClickFilterHandler}/> */}
            <NewInput message={message} addMessage={addMessage}/>
        </>

    );
}

export default App;
