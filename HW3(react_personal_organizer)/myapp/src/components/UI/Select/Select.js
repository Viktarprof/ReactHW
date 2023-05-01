
import s from './Select.module.css'


function Select(props){

    const {name, options} = props

    return(
        <select className={s.select_elem} name={name}>
            {options.map(((elem,i )=> 
                <option key={i} value={i}>
                    {elem}
                </option>
            ))}
        </select>
    )
}

export default Select