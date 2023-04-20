import React, { Component } from "react";
import PropType from "prop-types";
import "./index.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
	static propTypes = {
		addTodo: PropType.func.isRequired,
	};

	handleKeyUp = (event) => {
		const { target, keyCode } = event;
		//keyCode:是键盘点击的那一个键值，13代表着回车2
		//判断是否是回车
		if (keyCode !== 13) return;
		//判断这个输入是否空
		if (target.value.trim() === "") {
			alert("输入的不能为空");
			return;
		}
		this.props.addTodo({
            id: nanoid(),
            name: target.value,
            done: false,
        });
		target.value = "";
	};

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		);
	}
}
