const puppeteer = require("puppeteer");

//******************************HOTELS.COM WEB SCRAPER***************************** */
// let scrape = async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://www.hotels.com/");
//   await page.type(".widget-query-group .clearable", "orlando");
//   await page.waitFor(1000);
//   await page.click(".autosuggest-city #citysqm-asi0-s0");
//   await page.waitFor(500);
//   await page.click(".widget-query-group .cta-strong", { clickCount: 1 });
//   await page.click(".widget-query-group .cta-strong", { clickCount: 1 });
//   await page.waitForNavigation();
//   await page.click("#widget-query-label-1");
//   await page.waitFor(2000);
//   await page.click(
//     "body div.widget-daterange div.widget-daterange-cont div:nth-child(2) div.widget-datepicker-bd table tbody tr:nth-child(2) td:nth-child(1) a"
//   );
//   await page.waitFor(2000);
//   await page.click("#widget-query-label-3");

//   await page.waitFor(2000);
//   await page.click(
//     "body  div.widget-daterange div.widget-daterange-cont div:nth-child(1) div.widget-datepicker-bd table tbody tr:nth-child(5) td:nth-child(5) a"
//   );
//   await page.waitFor(3000);
//   page.evaluate(_ => {
//     window.scrollBy(0, 100);
//   });
//   await page.waitFor(1000);
//   await page.click("div.widget-query-group button.cta-strong", {
//     clickCount: 1
//   });
//   await page.waitFor(3000);
//   const pageUrl = page.url();
//   const hotels = await page.evaluate(() =>
//     [...document.querySelectorAll(".hotel")].map(elem => elem.innerText)
//   );
//   console.log(hotels);
//   console.log(pageUrl);
// };
// scrape();
