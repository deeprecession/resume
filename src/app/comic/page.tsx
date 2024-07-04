import { Metadata } from 'next';
import Comic from './components/Comic.js';

export const metadata: Metadata = {
  title: 'Comic',
  description: 'Page with one sad comic image',
};

const BlogPage = () => {
  return <Comic />;
};

export default BlogPage;
