import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
// import {NewComponentMap} from "./map/NewComponentMap";
import {NewButton} from "./button/NewButton";

function App() {
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
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber + ' age: ' + age)
    }
    const Button3Foo = () => {
        console.log("I am stupid button")
    }
    return (
        <>
            {/*<Header title={'NEW TITLE'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}
            {/*<NewComponentMap students={students} topCars={topCars}/>*/}
            <NewButton name={'MyYouTubeChannel-1'} callback={()=>Button1Foo('I am Vasya!', 21)}/>
            <NewButton name={'MyYouTubeChannel-2'} callback={()=>Button1Foo('I am Ivan!', 35)}/>
            <NewButton name={'MyYouTubeChannel-3'} callback={Button3Foo}/>
        </>

    );
}

export default App;
