"use strict";

export function setCreatePostHandler() {
	let btn = document.getElementById("blog-create-btn");

	if (btn) {
		btn.addEventListener("click", addNewPost);
	}
}

function addNewPost() {
	let blog_title_element = document.getElementById(
		"blog-title",
	) as HTMLFormElement;
	let title = blog_title_element.value;

	let blog_content_element = document.getElementById(
		"blog-content",
	) as HTMLFormElement;
	let content = blog_content_element.value;

	let newPost: HTMLDivElement = createPost(title, content);

	let blogContainer = document.getElementById(
		"blog-posts-container",
	) as HTMLDivElement;
	if (blogContainer) {
		blogContainer.appendChild(newPost);
	}
}

function createPost(title: string, content: string): HTMLDivElement {
	let postTitle = document.createElement("div");
	postTitle.className = "blog-post-title";
	postTitle.innerText = title;

	let postContent = document.createElement("div");
	postContent.className = "blog-post-content";
	postContent.innerText = content;

	let newPost = document.createElement("div");
	newPost.className = "blog-post";
	newPost.appendChild(postTitle);
	newPost.appendChild(postContent);

	return newPost;
}
