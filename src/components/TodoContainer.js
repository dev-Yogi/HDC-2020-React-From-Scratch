import React from 'react';
import TodoList from "./TodoList";
import InputTodo from './InputTodo';

import { v4 as uuidv4 } from 'uuid';
import Header from './Header';


class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            // id: uuid.v4(),
            id: uuidv4(),
            title: "Setup development environment",
            completed: true,
          },
          {
            // id: uuid.v4(),
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false,
          },
          {
            // id: uuid.v4(),
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false,
          },
        ],
      };

      handleChange = (id) => {
        this.setState({
          todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;     
               }
               return todo;
        }),
      });
    };
    deleteTodo = (id) => {
      this.setState({
          todos: [
            ...this.state.todos.filter((todo) =>
            {
              return todo.id !== id;
            }),
          ],
      });
    };
    addTodo = (title) => {
      const newTodo = {
        // id: uuid.v4(),
        id: uuidv4(),
        title: title,
        completed: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
      });
    };
    
    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodo={this.addTodo} />
                <TodoList todo={this.state.todos} 
                  handleChange={this.handleChange}
                  deleteTodo={this.deleteTodo}
                />
                
            </div>
        )
    }
}
export default TodoContainer
