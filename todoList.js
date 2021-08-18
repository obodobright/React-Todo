import React from 'react';

function TodoList(props){
    return(
        <React.Fragment>
            <div className="todoContainer">
                <ul>
                {props.list.map((list)=>(
                    <li key={list} className="todo">
                        <span>{list}</span>
                        <button onClick={()=>props.deleteBtn(list)} className="removeBtn">x</button>
                    </li>
                ))}                
                </ul>
            </div>
        </React.Fragment>
    )
}
export default TodoList
