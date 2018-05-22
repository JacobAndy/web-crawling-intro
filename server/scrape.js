const puppeteer = require("puppeteer");
const sleep = require("./utils");

//******************************HOTELS.COM WEB SCRAPER***************************** */
let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.hotels.com/");
  await page.type(".widget-query-group .clearable", "orlando");
  await page.waitFor(500);
  //   await sleep(page, 60000);
  await page.click(".autosuggest-city #citysqm-asi0-s0");
  //   await page.waitFor(500);
  await sleep(page, 60000);
  await page.click(".widget-query-group .cta-strong", { clickCount: 1 });
  await page.click(".widget-query-group .cta-strong", { clickCount: 1 });
  await page.waitForNavigation();
  await page.click("#widget-query-label-1");
  //   await page.waitFor(2000);
  await sleep(page, 60000);
  await page.click(
    "body div.widget-daterange div.widget-daterange-cont div:nth-child(2) div.widget-datepicker-bd table tbody tr:nth-child(2) td:nth-child(1) a"
  );
  //   await page.waitFor(2000);
  await sleep(page, 60000);
  await page.click("#widget-query-label-3");

  //   await page.waitFor(2000);
  await sleep(page, 60000);
  await page.click(
    "body  div.widget-daterange div.widget-daterange-cont div:nth-child(1) div.widget-datepicker-bd table tbody tr:nth-child(5) td:nth-child(5) a"
  );
  //   await page.waitFor(3000);
  await sleep(page, 60000);
  page.evaluate(_ => {
    window.scrollBy(0, 100);
  });
  //   await page.waitFor(1000);
  await sleep(page, 60000);
  await page.click("#q-room-0-adults");
  await page.waitFor(1000);
  await page.select("#q-room-0-adults", "1");
  await page.waitFor(500);
  await page.click("div.widget-query-group button.cta-strong", {
    clickCount: 1
  });
  //   await page.waitFor(3000);
  await sleep(page, 60000);
  const pageUrl = page.url();
  const hotels = await page.evaluate(() =>
    [...document.querySelectorAll(".hotel")].map(elem => elem.innerText)
  );
  console.log(hotels);
  console.log(pageUrl);
};
scrape();

//*******************EXPEDIA WEB SCRAPER**************** */
// let scrape = async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://www.expedia.com/");
//   await sleep(page, 60000);
//   await page.click("#tab-flight-tab-hp");
//   await sleep(page, 60000);
//   await page.type("#flight-origin-hp-flight", " Dallas", { delay: 5 });
//   await page.waitFor(600);
//   await page.click("#aria-option-0");
//   await sleep(page, 60000);
//   await page.type("#flight-destination-hp-flight", " Orlando", { delay: 5 });
//   await page.waitFor(600);
//   await page.click("#aria-option-0");
//   await sleep(page, 60000);
//   await page.click("#flight-departing-hp-flight");
//   await sleep(page, 60000);
//   await page.click(
//     "#flight-departing-wrapper-hp-flight > div > div > div:nth-child(5) > table > tbody > tr:nth-child(2) > td:nth-child(1) > button"
//   );
//   await sleep(page, 60000);
//   await page.click("#flight-returning-hp-flight");
//   await sleep(page, 60000);
//   await page.click(
//     "#flight-returning-wrapper-hp-flight > div > div > div:nth-child(5) > table > tbody > tr:nth-child(5) > td:nth-child(5) > button"
//   );
//   await sleep(page, 60000);
//   await page.click(
//     "#gcw-flights-form-hp-flight > div.cols-nested.ab25184-submit > label > button"
//   );
//   await sleep(page, 60000);
//   const pageUrl = page.url();
//   const flight = await page.evaluate(() =>
//     [...document.querySelectorAll(".visuallyhidden")].map(
//       elem => elem.innerText
//     )
//   );
//   console.log(flight);
//   console.log(pageUrl);
// };
// scrape();
