import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/";


class microblogApi {
	static async request(endpoint, paramsOrData = {}, verb = "GET") {

		console.debug("API Call:", endpoint, paramsOrData, verb);

		try {
			return (await axios({
				method: verb,
				url: `${BASE_URL}${endpoint}`,
				[verb === "get" ? "params" : "data"]: paramsOrData
			})).data;
			// axios sends query string data via the "params" key,
			// and request body data via the "data" key,
			// so the key we need depends on the HTTP verb
		}
		catch (err) {
			console.error("API Error:", err.response);
			let message = err.response.data.message;
			throw Array.isArray(message) ? message : [message];
		}

	}
	/** gets all titles.*/
	static async getTitles() {
		let res = await this.request(`api/posts`);

		return res;
	}

	/** gets one post.*/
	static async getPost(id) {
		let res = await this.request(`api/posts/${id}`);

		return res;
	}

	/** adds post.*/
	static async addPost(postData) {
		let res = await this.request(`api/posts`, postData, "post");

		return res;
	}

	/** edits post.*/
	static async editPost(id, postData) {
		let res = await this.request(`api/posts/${id}`, postData, "put");

		return res;
	}

	/** deletes post.*/
	static async deletePost(id) {
		let res = await this.request(`api/posts/${id}`, {}, "delete");

		return res;
	}

	/** gets all comments.*/
	static async getComments(id) {
		let res = await this.request(`api/posts/${id}/comments`);

		return res;
	}

	/** add comment.*/
	static async addComment(id, text) {
		let res = await this.request(`api/posts/${id}/comments`, { text }, "post");

		return res;
	}

	/** edit comment.*/
	static async editComment(postId, commentId, text) {
		let res = await this.request(`api/posts/${postId}/comments/${commentId}`, { text }, "put");

		return res;
	}

	/** delete comment.*/
	static async deleteComment(postId, commentId) {
		let res = await this.request(`api/posts/${postId}/comments/${commentId}`, {}, "delete");

		return res;
	}

	/** upvote post.*/
	static async upvotePost(postId) {
		let res = await this.request(`api/posts/${postId}/vote/up`, {}, "post");

		return res;
	}

	/** downvote post.*/
	static async downvotePost(postId) {
		let res = await this.request(`api/posts/${postId}/vote/down`, {}, "post");

		return res;
	}
}

export default microblogApi