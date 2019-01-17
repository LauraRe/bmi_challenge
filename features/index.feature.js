const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('by inputing his weight and height with metric method', async () => {

        await browser.selectOption("select[id='measurement-system']", {option: 'metric'})
        await browser.fillIn("input[id='weight']", { with: "90" })
        await browser.fillIn("input[id='height']", { with: "186" })

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your BMI is 26.01');
    });

    it('by inputing his weight and height with imperial method', async () => {

        await browser.selectOption("select[id='measurement-system']", {option: 'imperial'})
        await browser.fillIn("input[id='weight']", { with: "198" })
        await browser.fillIn("input[id='height']", { with: "72" })

        await browser.clickOnButton("button")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your BMI is 26.85');
    });
});
