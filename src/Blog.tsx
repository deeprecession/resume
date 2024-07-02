import { ChangeEvent, FC, MouseEvent, useState } from "react";

interface BlogFormContent {
	title: string;
	content: string;
}

interface BlogPostProps {
	title: string;
	content: string;
}

const BlogPost: FC<BlogPostProps> = (props): JSX.Element => {
	return (
		<div className="blog-post">
			<div className="blog-post-title">{props.title}</div>
			<div className="blog-post-content">{props.content}</div>
		</div>
	);
};

export default function Blog() {
	const [formContent, setFormContent] = useState<BlogFormContent>({
		title: "",
		content: "",
	});

	const [blogPosts, setBlogPosts] = useState<BlogFormContent[]>([]);

	const onBlogPostCreate = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (formContent.title && formContent.content) {
			setBlogPosts([...blogPosts, formContent]);
			setFormContent({ title: "", content: "" });
		}
	};

	const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormContent({
			...formContent,
			title: event.target.value,
		});
	};

	const onFormChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setFormContent({
			...formContent,
			content: event.target.value,
		});
	};

	return (
		<div id="blog">
			<div id="blog-posts-container">
				<BlogPost title="Hello!" content="Some content..." />

				{blogPosts.map((post, index) => (
					<BlogPost key={index} title={post.title} content={post.content} />
				))}
			</div>

			<form id="blog-form">
				<label>Title</label>
				<input
					type="text"
					id="blog-title"
					value={formContent?.title}
					onChange={onTitleChange}
				/>

				<label>Content</label>
				<textarea
					id="blog-content"
					name="blog-content"
					value={formContent?.content}
					onChange={onFormChange}
				></textarea>

				<button id="blog-create-btn" type="button" onClick={onBlogPostCreate}>
					Create Post
				</button>
			</form>
		</div>
	);
}
