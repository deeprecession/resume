import { Metadata } from 'next';
import Blog from './components/Blog.js';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog that saves nothing',
};

const BlogPage = () => {
  return <Blog />;
};

export default BlogPage;
