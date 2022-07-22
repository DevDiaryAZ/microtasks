type NewComponentFilterType = {
    currentMoney: currentMoney[]
    onClickFilterHandler: (buttonName: FilterType)=>void
}

type currentMoney = {
    banknotes: string
    value: number
    number: string
}

type FilterType = 'all' | 'Dollars' | 'RUBLS'

export const NewComponentFilter = (props: NewComponentFilterType) => {
    return (<>
            <ul>
                {props.currentMoney.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>{el.banknotes}</span>
                                <span>{el.value}</span>
                                <span>{el.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div style={{margin: "20px"}}>
                <button onClick={() => props.onClickFilterHandler('all')}
                        style={{margin: "10px"}}>all
                </button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}
                        style={{margin: "10px"}}>RUBLS
                </button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}
                        style={{margin: "10px"}}>Dollars
                </button>
            </div>
        </>

    )
}