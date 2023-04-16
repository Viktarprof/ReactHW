function Select(props){

    const {name, options} = props

    return(
        <select name={name}>
            {options.map(((elem,i )=> 
                <option key={i} value={i}>
                    {elem}
                </option>
            ))}
        </select>
    )
}

export default Select