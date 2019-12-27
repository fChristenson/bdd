const { Before, After } = require("cucumber");
const puppeteer = require("puppeteer");

Before(async function() {
  const world = this;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  world._browser = browser;
  world.page = page;
});

After(function() {
  return this._browser.close();
});
