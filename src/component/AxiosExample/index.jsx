import axios from "axios";
import React, { Component } from "react";

export default class Example extends Component {
	state = { posts: [] };

	componentDidMount() {
		axios
			// .get("http://localhost:3000/api1/posts")
			.get("/api1/posts")
			.then((result) => {
				this.setState({ posts: result.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				{this.state.posts.map((post) => {
					return (
						<li key={post.id}>
							标题：{post.title} 作者：{post.author}
						</li>
					);
				})}
			</div>
		);
	}
}
