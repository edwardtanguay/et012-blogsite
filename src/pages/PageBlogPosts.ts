import blogPosts from '../data/blogPosts.json';
import './styles/pageBlogPosts.scss';

export const PageBlogPosts = () => {
	return /*html*/`
<div class="page pageBlogPosts">
<p>There are ${blogPosts.length} blog posts.</p>

<div class="blogPosts">
	${blogPosts.map(blogPost => {
			return `
	<div class="blogPost">
		${blogPost.title}	
	</div>
		`;
		}).join('')}
	</div>
</div>
`;
}