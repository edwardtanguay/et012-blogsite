import blogPosts from '../data/blogPosts.json';
import './styles/pageBlogPosts.scss';
import { BlogPost } from '../components/BlogPost';

export const PageBlogPosts = () => {
	return /*html*/`
<div class="page pageBlogPosts">
<p>There are ${blogPosts.length} blog posts.</p>

<div class="blogPosts">
	${blogPosts.map(blogPost => {
		return BlogPost(); 
		}).join('')}
	</div>
</div>
`;
}