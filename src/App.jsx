//创建外壳组件APP
import { nanoid } from "nanoid";
import React, { Component } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import List from "./component/List";

class App extends Component {
	state = {
		todos: [
			{ id: nanoid(), name: "吃饭", done: true },
			{ id: nanoid(), name: "睡觉", done: false },
			{ id: nanoid(), name: "打代码", done: true },
		],
	};

	//添加相应的事情
	addTodo = (todoObj) => {
		//如果想要子组件中的值传递给父组件，就可以给子组件一个函数，子组件在调用函数的时候，将值作为参数传递过去
		const { todos } = this.state;
		this.setState({ todos: [todoObj, ...todos] });
	};

	//根据id,修改状态中是否被选中
	updateTodo = (id, checked) => {
		const { todos } = this.state;
		const newTodo = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, done: checked };
			}
			return todo;
		});
		this.setState({ todos: newTodo });
	};

	//点击删除按钮，删除其中一行
	deleteTodo = (id) => {
		const { todos } = this.state;
		// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
		const newTo = todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({ todos: newTo });
	};

	//全选
	selectAll = (done) => {
		const { todos } = this.state;

		const newTo = todos.map((todo) => {
			return { ...todo, done };
		});
		this.setState({ todos: [...newTo] });
	};

	//清除已完成内容
	clearAllDone = () => {
		const { todos } = this.state;
		// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
		const newTo = todos.filter((todo) => {
			return todo.done !== true;
		});
		this.setState({ todos: newTo });
	};

	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					{/*注意：传递参数的属性名称不能是关键字，比如delete*/}
					<List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={this.state.todos} selectAll={this.selectAll} clearAllDone={this.clearAllDone} />
				</div>
			</div>
		);
	}
}

export default App;
