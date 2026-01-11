function Array({ array }) {

    const mappedarray = array.map((array) => {
        return <li>{array}</li>
    })

    return (
        <ul>
            {mappedarray}
        </ul>
    )
}

export default Array;