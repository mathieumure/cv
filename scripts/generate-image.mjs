import { chromium } from 'playwright';

const run = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1100, height: 600 } })
  const page = await context.newPage();
  console.log('Browsing into the CV...');
  await page.goto('http://localhost:3000/');
  console.log('Waiting for CV to be displayed');
  await page.waitForSelector('"Mathieu Mure"')
  console.log('Generate PNG...');
  await page.screenshot({ path: 'dist/cv.png', fullPage: true });

  console.log('All done !');

  await browser.close();
}

run()
