import * as tools from './tools';
import { PageWelcome } from './pages/PageWelcome';
import { PageBlogPosts } from './pages/PageBlogPosts';
import { PageAbout } from './pages/PageAbout';
import { Page404 } from './pages/Page404';

const pageNames = ['Welcome', 'Blog Posts', 'About'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case '':
		case 'welcome':
			return PageWelcome();
		case 'blogposts':
			return PageBlogPosts();
		case 'about':
			return PageAbout();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav class="menu">
		<ul>
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? pageNames[0].toLowerCase() : currentPageIdCode;
	return currentPageIdCode;
}