import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role='form' className='todoForm margem' style={{display:'flex'}} >
                <input id='description' className='form-control'
                    style={{width: '87%',marginRight: '10px'}}
                    placeholder='Adicione uma tarefa' 
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>
        </div>
    )
}
