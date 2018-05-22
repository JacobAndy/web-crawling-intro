const puppeteer = require("puppeteer");

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

//   const html = await page.evaluate(() =>
//     [...document.querySelectorAll(".hotel")].map(elem => elem.innerText)
//   );
//   console.log(html);
// };
// scrape();

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.connectdevs.com");
  await page.click(".menu-container");
  await page.waitFor(400);
  await page.click(".link-8-active");
  await page.waitFor(1500);
  page.waitForNavigation();
  await page.click(
    ".auth0-lock-social-buttons-container button:nth-child(0n+1)"
  );
  await page.waitForNavigation();
  await page.type("#login_field", *user login*);
  await page.type("#password", *user password*);
  await page.click(".btn");
  await page.waitFor(3000);
  await page.click(".menu-container");
  await page.waitFor(3000);
  await page.click(".link-4-active");
  await page.waitFor(3000);
  await page.type(".message-input", "Joes a bitch");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "Joes a hoe");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "lol");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.waitFor(100);
  await page.type(".message-input", "hello world");
  await page.click(".send-arrow");
  await page.click(".menu-container");
  await page.waitFor(700);
  await page.click(".link-5-active");
  await page.waitFor(500);
  await page.click(".edit-info-btn");
  await page.waitFor(200);
  await page.type(".user-bio .info div .profile-input", "LOLOLOL");
  await page.waitFor(300);
  await page.click(
    ".user-experience div:nth-child(2) div:nth-child(1) div:nth-child(1) button:nth-child(2)"
  );
  await page.waitFor(200);
  await page.click(".update-info-btn");
  await page.waitFor(2000);
  await page.click(".swal-button--confirm");
  await page.waitFor(400);
  await page.click(".menu-container");
  await page.waitFor(300);
  await page.click(".link-2-active");
  await page.waitFor(300);
  await page.click(".post-btn");
  await page.waitFor(1000);
  await page.type(
    ".new-post-container .textarea",
    "My name is Aaron. I live near Tx where I write software that makes people happy. I love kids, movies, music, and giving back. I value honesty, respect, passion, and being genuine. I believe in making tomorrow a better place than today. my best friend is Jacob and he is so nice"
  );
  await page.waitFor(500);
  await page.click(".new-post-container .add-post-full");
  await page.waitFor(1000);
  await page.click(".menu-container");
  await page.waitFor(1000);
  await page.click(".link-8-active");
  await page.waitFor(500);
  await browser.close();
};
scrape();
