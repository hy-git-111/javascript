// 3초 후 나타나는 버튼 클릭하기

import { Builder, By } from "selenium-webdriver";

driver = new Builder().forBrowser('chrome').build();
await driver.wait(until.elementLocated(By.id('hello-btn')), 10000).click();