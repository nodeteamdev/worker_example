const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.medium.com');
        await page.pdf({ path: 'medium.pdf', format: 'A4' });
        await browser.close();
    } catch(error) {
        process.exit(1);
    }
})();