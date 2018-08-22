/* global browser, itownsPort */
const assert = require('assert');

describe('globe_wfs_color', () => {
    it('should run', async function _() {
        const page = await browser.newPage();
        const result = await loadExample(page,
            `http://localhost:${itownsPort}/examples/globe_wfs_color.html`,
            this.test.fullTitle());

        assert.ok(result);
        await page.close();
    });
});
