import { Selector } from 'testcafe';

fixture `Getting Started`
	.page `https://github.com/ldenham3/tctester.git`;

test('My first test', async t => {
    // Test code
});

test('My second test', async t => {
    await t
        .click('#covered-button')
});