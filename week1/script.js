function addNewPost() {
	let title = document.getElementById("blog-title").value;
	let content = document.getElementById("blog-content").value;

	let newPost = createPost(title, content);

	let blog = document.getElementById("blog-posts-container");
	blog.appendChild(newPost);
}

function createPost(title, content) {
	let postTitle = document.createElement("div");
	postTitle.className = "blog-post-title";
	postTitle.innerHTML = title;

	let postContent = document.createElement("div");
	postContent.className = "blog-post-content";
	postContent.innerHTML = content;

	let newPost = document.createElement("div");
	newPost.className = "blog-post";
	newPost.appendChild(postTitle);
	newPost.appendChild(postContent);

	return newPost;
}
