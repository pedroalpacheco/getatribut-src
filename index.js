const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        //headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.setDefaultTimeout(0);
    
    await page.goto('https://www.construmarques.com.br/produto/acabamento-para-chuveiro-monocomando-link-4993-c-lnk-act-deca-74804');

    await page.waitForTimeout('2000');

    await page.waitForSelector('#zoomImagemProduto');
    
    const img = await page.$eval('#zoomImagemProduto', el => el.getAttribute('src'));
    
    await console.log(img);

    await browser.close();
})();