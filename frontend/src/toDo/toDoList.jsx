import React from 'react'
import IconButton from '../templates/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(toDo => (
            <tr key={toDo._id}>
                <td className={toDo.done ? 'markedAsDone' : ''}> {toDo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={toDo.done}
                        onClick={() => props.handleMarkAsDone(toDo)} />
                    <IconButton style='warning' icon='undo' hide={!toDo.done}
                        onClick={() => props.handleMarkAsPending(toDo)} />
                    <IconButton style='danger' icon='trash-o' hide={!toDo.done}
                        onClick={() => props.handleRemove(toDo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}