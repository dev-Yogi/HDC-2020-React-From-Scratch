import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render(){
        return(
            <div>
                {this.props.todo.map(todo => (
                    <TodoItem key={todo.id} todo={todo}
                    handleChange={this.props.handleChange} 
                    deleteTodo={this.props.deleteTodo}
                    />
                ))}
            </div>
        );
    }
}
export default TodoList