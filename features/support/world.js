const { Before, After } = require("cucumber");
const puppeteer = require("puppeteer");

Before(async function() {
  const world = this;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  world._browser = browser;
  world.page = page;
});

Before({ tags: "@mobile" }, async function() {
  const world = this;
  await world._browser.close();
  const browser = await puppeteer.launch({
    defaultViewport: { width: 320, height: 466 }
  });
  const page = await browser.newPage();
  world._browser = browser;
  world.page = page;
});

Before({ tags: "@tablet" }, async function() {
  const world = this;
  await world._browser.close();
  const browser = await puppeteer.launch({
    defaultViewport: { width: 768, height: 622 }
  });
  const page = await browser.newPage();
  world._browser = browser;
  world.page = page;
});

After(function() {
  return this._browser.close();
});
