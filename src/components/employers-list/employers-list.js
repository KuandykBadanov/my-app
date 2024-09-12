import EmployersListItem from '../employers-list-item/emplyers-list-item';

import './employers-list.css';

const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    })

    console.log(elements)

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployersList;