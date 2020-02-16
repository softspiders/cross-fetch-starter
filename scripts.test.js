
const { fetch } = require('./scripts');

const testUrl = 'http://localhost:3000/api';

const output = '{"method":"GET"}';

test('Test isomorphic fetch function: ' + testUrl, async () => {
	const data = await fetch(testUrl).then(response => response.text());
	expect(data).toBe(output);
});