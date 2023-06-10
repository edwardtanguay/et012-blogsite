import { IBlogPost } from '../interfaces';

export const BlogPost = (blogPost: IBlogPost) => {
	return `
	<div class="blogPost">
		${blogPost.title}	
	</div>
		`;
};