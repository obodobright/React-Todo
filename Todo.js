import React from 'react';
import TodoList from './todoList'
import NewTodo from './newTodo'
import './todo.css'
class Todo extends React.Component{
    constructor(){
        super()
        this.state = {
            myList : [],
            input : ""
        }

        this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
        this.updateNewTodo = this.updateNewTodo.bind(this)
        this.addNewTodo = this.addNewTodo.bind(this)
    }
    handleDeleteTodo(name){
        this.setState((currentState)=>{
            return{
                myList: currentState.myList.filter((d)=> d !==name)
            }
        })
    }
    updateNewTodo(e){
        const value = e.target.value
        
        this.setState({
            input : value
        })
        
    }
    addNewTodo(){
       
        if(this.state.input === ""){
            return(
                console.log('never')
            ) 
        }
        else{
            this.setState((currentState)=>{
                return{
                    myList : currentState.myList.concat([this.state.input]),
                    input: "",
                    isClicked : true
                }
            })
        }
    }
    render(){
        const length = this.state.myList.length

        return(
            <React.Fragment>
                <main>
                <h1>TODO APP</h1>
                 <p>{length} todo</p>
                
                 <NewTodo 
                 input={this.state.input}
                 newTodo={this.addNewTodo}
                 updateTodo = {this.updateNewTodo}
                 />
                
                <TodoList list={this.state.myList} deleteBtn= {this.handleDeleteTodo}/>
                {length === 0? <p>No Todo today</p>: null}
                </main>
                
            </React.Fragment>
        )
    }
}
export default Todo
