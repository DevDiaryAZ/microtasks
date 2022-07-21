type NewComponentMapPropsType = {
    //students: Array<StudentsType>
    students: StudentsType[]
    topCars: TopCarsType[]
}

type StudentsType = {
    id: number
    name: string
    age: number
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponentMap = (props: NewComponentMapPropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((el, index)=>{
                return (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>

        // <ul>
        //     {props.students.map((el, index) => {
        //         return (<li key={el.id}><span>{el.name}</span><span> age: {el.age}</span></li>)
        //     })
        //     }
        // </ul>
    )
}