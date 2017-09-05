# Exo

## React &amp; Redux

1.  Clone repo
1.  Run example
1.  Create a `<Route />` that points to `/faq`
1.  Add a [**React Router Link**](https://reacttraining.com/react-router/web/api/Link) to `/faq` into [`<Menu />`](blob/master/app/components/layout/menu/Menu.jsx) above.
1.  Create `<Faq />` component that lists questions and answers
	1. Questions/answers must be represented within a responsive [`<Grid />`](https://react-bootstrap.github.io/components.html#grid):
		- 4 Questions/answer per line on big screens
		- 2 Questions/answer per line on medium screens
		- 1 Questions/answer per line on small screens
	1. Add a button to toggle all answers visibility
	1. Add a dropdown to let users sort by `question`, `answer` or `userName` alphabetically, ascending and descending
		- Update state consequently
	1. Add a text input to let user filter questions (min 3 chars, max 2 words)
		- Update state consequently
	1.  Perform an HTTP request to `/faq.json`, update state, then fill up the FAQ with data.
1.  Add a form allowing user to add a new question/answer.
	1. Make for inputs controlled
	1. As user types, replace `o`'s with `0`'s

1.  Make both routes load asynchronously
1.  Make a pull request once you're done!
