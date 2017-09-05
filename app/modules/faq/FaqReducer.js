import { List, Map } from 'immutable';

const defaultQuestion = Map({
	avatar: '',
	userName: '',
	question: '',
	answer: '',
});
const defaultState = List([
	// defaultQuestion,
]);

export default function faq(state = defaultState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
