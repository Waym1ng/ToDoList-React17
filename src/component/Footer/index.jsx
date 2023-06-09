import React, { Component } from "react";
import "./index.css";
class Footer extends Component {
	//全选以及全不选
	choose = (event) => {
		//1.如果选中，所有的全都选中
		this.props.selectAll(event.target.checked);
	};

	//清除已完成内容
	clearAllDone = () => {
		this.props.clearAllDone();
	};

	render() {
		const { todos } = this.props;
		//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
		//reduce((初始值,当前的元素)=>{},传递给函数的初始值)
		const sum = todos.reduce((pre, todo) => {
			return pre + (todo.done ? 1 : 0);
		}, 0);
		const total = todos.length

		return (
			<div className="todo-footer">
				<label>
					{/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
					<input
						onChange={this.choose}
						type="checkbox"
						checked={sum === total && total !== 0 ? true : false}
					/>
				</label>
				<span>
					<span>已完成{sum}</span> / 全部{total}
				</span>
				<button onClick={this.clearAllDone} className="btn btn-danger">
					清除已完成任务
				</button>
			</div>
		);
	}
}

export default Footer;
