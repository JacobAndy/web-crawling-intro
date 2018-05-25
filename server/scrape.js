const puppeteer = require("puppeteer");
const sleep = require("./utils");
let sameMonth = false;
let expediaGetMonth = false;
function getClickCount(e, c) {
  if (e.getFullYear() > c.getFullYear()) {
    sameMonth = false;
    expediaGetMonth = false;
    if (e.getMonth() < c.getMonth()) {
      return (
        (e.getFullYear() - c.getFullYear()) * 12 -
        (c.getMonth() - e.getMonth()) -
        1
      );
    } else if (e.getMonth() > c.getMonth()) {
      return (
        (e.getFullYear() - c.getFullYear()) * 12 + (e.getMonth() - c.getMonth())
      );
    } else if (e.getMonth() === c.getMonth()) {
      return (e.getFullYear() - c.getFullYear()) * 12;
    }
  } else if (e.getMonth() > c.getMonth() + 1) {
    sameMonth = false;
    expediaGetMonth = false;
    return e.getMonth() - (c.getMonth() + 1);
  } else if (e.getMonth() === c.getMonth()) {
    sameMonth = true;
    expediaGetMonth = false;
  } else if (e.getMonth() === c.getMonth() + 1) {
    expediaGetMonth = true;
  }
}

//******************************HOTELS.COM WEB SCRAPER***************************** */
let scrapeHotel = async (
  startweek,
  startday,
  endweek,
  endday,
  destination,
  origin,
  startingmonth,
  endingmonth,
  starting,
  ending
) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.hotels.com/");

  //*********************************************** >>>>>>>>>This is where the user input will go
  await page.type(".widget-query-group .clearable", " " + destination);
  await page.waitFor(500);
  await page.click(".autosuggest-city #citysqm-asi0-s0");
  await sleep(page, 60000);
  await page.click(".widget-query-group .cta-strong", { clickCount: 1 });
  await page.click(".widget-query-group .cta-strong", { clickCount: 1 });
  await page.waitForNavigation();
  await page.click("#widget-query-label-1");
  await sleep(page, 60000);
  for (let i = 0; i < starting; i++) {
    console.log("aarons a champion" + " " + i);
    await page.click(
      "body div.widget-daterange div.widget-daterange-cont div:nth-child(2) div.widget-datepicker-hd button.widget-datepicker-next"
    );
  }
  await sleep(page, 60000);
  await page.click(
    sameMonth
      ? `body div.widget-daterange div.widget-daterange-cont div:nth-child(1) div.widget-datepicker-bd table tbody tr:nth-child(${startweek}) td:nth-child(${startday}) a`
      : `body div.widget-daterange div.widget-daterange-cont div:nth-child(2) div.widget-datepicker-bd table tbody tr:nth-child(${startweek}) td:nth-child(${startday}) a`
  );
  await sleep(page, 60000);
  await page.click("#widget-query-label-3");

  await sleep(page, 60000);
  for (let i = 0; i < ending - starting; i++) {
    await page.click(
      "body div.widget-daterange div.widget-daterange-cont div:nth-child(2) div.widget-datepicker-hd button.widget-datepicker-next"
    );
  }

  await sleep(page, 60000);
  await page.click(
    `body div.widget-daterange div.widget-daterange-cont div:nth-child(1) div.widget-datepicker-bd table tbody tr:nth-child(${endweek}) td:nth-child(${endday}) a`
  );
  await sleep(page, 60000);
  page.evaluate(_ => {
    window.scrollBy(0, 100);
  });
  await sleep(page, 60000);
  await page.click("#q-room-0-adults");
  await page.waitFor(1000);
  await page.select("#q-room-0-adults", "1");
  await page.waitFor(500);
  await page.click("div.widget-query-group button.cta-strong", {
    clickCount: 1
  });
  await sleep(page, 60000);
  const hotelpageUrl = page.url();
  const hotels = await page.evaluate(() =>
    [...document.querySelectorAll(".hotel")].map(elem => elem.innerText)
  );

  // console.log(hotels);
  // console.log(hotelpageUrl);
  // browser.close();
  // };

  //*******************EXPEDIA WEB SCRAPER**************** */
  // let scrapeFlight = async (
  //   startweek,
  //   startday,
  //   endweek,
  //   endday,
  //   destination,
  //   origin
  // ) => {
  //   const browser = await puppeteer.launch({ headless: false });
  //_____
  const newpage = await browser.newPage();
  await newpage.goto("https://www.expedia.com/");
  await sleep(newpage, 60000);
  await newpage.click("#tab-flight-tab-hp");
  await sleep(newpage, 60000);
  await newpage.type("#flight-origin-hp-flight", " " + origin, { delay: 5 });
  await newpage.waitFor(600);
  await newpage.click("#aria-option-0");
  await sleep(newpage, 60000);
  await newpage.type("#flight-destination-hp-flight", " " + destination, {
    delay: 5
  });
  await newpage.waitFor(600);
  await newpage.click("#aria-option-0");
  await sleep(newpage, 60000);
  await newpage.click("#flight-departing-hp-flight");
  await sleep(newpage, 60000);
  for (let i = 0; i < starting + 1; i++) {
    await newpage.click(".datepicker-next");
  }
  await sleep(newpage, 60000);

  await newpage.click(
    // datepicker-cal-month
    !expediaGetMonth
      ? `div:nth-child(4) .datepicker-cal-dates > tr:nth-child(${startweek}) > td:nth-child(${startday}) > button`
      : `div:nth-child(5) .datepicker-cal-dates > tr:nth-child(${startweek}) > td:nth-child(${startday}) > button`
    //#package-departing-wrapper-hp-package > div > div > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(6) > button
  );
  await sleep(newpage, 60000);
  await newpage.click("#flight-returning-hp-flight");
  await sleep(newpage, 60000);
  for (let i = 0; i < ending - starting; i++) {
    console.log(i);
    await newpage.click(".datepicker-next");
  }
  await sleep(newpage, 60000);
  await newpage.click(
    !expediaGetMonth
      ? `div:nth-child(4) .datepicker-cal-dates > tr:nth-child(${endweek}) > td:nth-child(${endday}) > button`
      : `div:nth-child(5) .datepicker-cal-dates > tr:nth-child(${endweek}) > td:nth-child(${endday}) > button`
    // `#flight-returning-wrapper-hp-flight > div > div > div:nth-child(4) > table > tbody > tr:nth-child(${endweek}) > td:nth-child(${endday}) > button`
    // `#package-returning-wrapper-hp-package .datepicker-dropdown .show-second-month div:nth-child(5) table tbody tr:nth-child(${endweek}) td:nth-child(${endday})`
  );
  // await sleep(newpage, 60000);
  // await newpage.click(
  //   "#gcw-flights-form-hp-flight > div.cols-nested.ab25184-submit > label > button"
  // );
  // await sleep(newpage, 60000);
  // const flightpageUrl = newpage.url();
  // const flight = await newpage.evaluate(() =>
  //   [...document.querySelectorAll(".visuallyhidden")].map(
  //     elem => elem.innerText
  // )
  // );
  // console.log(hotels);
  // console.log(hotelpageUrl);
  // console.log(flight);
  // console.log(flightpageUrl);
  // browser.close();
};

const scrapem = (req, res) => {
  let {
    startingweek,
    startingday,
    endingweek,
    endingday,
    destination,
    origin,
    startingmonth,
    endingmonth
  } = req.query;
  const currDate = new Date();
  startingmonth = new Date(startingmonth);
  endingmonth = new Date(endingmonth);
  const starting = getClickCount(startingmonth, currDate);
  const ending = getClickCount(endingmonth, currDate);

  scrapeHotel(
    +startingweek,
    +startingday,
    +endingweek,
    +endingday,
    destination,
    origin,
    startingmonth,
    endingmonth,
    +starting,
    +ending
  );
};

module.exports = {
  scrapem
};
