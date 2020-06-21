import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [
				...state,
				{
					id: Math.floor(Date.now() + Math.random()),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		case 'delete_blogpost':
			return state.filter(
				blogPost => blogPost.id !== action.payload
			);
		case 'edit_blogpost':
			return state.map(blogPost =>
				blogPost.id === action.payload.id
					? action.payload
					: blogPost
			);

		default:
			return state;
	}
};

const addBlogPost = dispatch => {
	return (title, content, callBack) => {
		dispatch({
			type: 'add_blogpost',
			payload: { title, content },
		});
		callBack && callBack();
	};
};

const deleteBlogPost = dispatch => {
	return id => {
		dispatch({ type: 'delete_blogpost', payload: id });
	};
};

const editBlogPost = dispatch => {
	return (id, title, content, callback) => {
		dispatch({
			type: 'edit_blogpost',
			payload: { id, title, content },
		});
		callback && callback();
	};
};

export const {
	Context,
	Provider,
} = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost },
	[{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);
