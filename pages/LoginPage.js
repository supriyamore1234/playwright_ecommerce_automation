const {expect}= require('@playwright/test');
exports.LoginPage=class LoginPage{

  constructor(page){
    this.page=page;
    this.usernameInput=page.locator('[name="user-name"]');
    this.paswordInput=page.locator('[name="password"]');
    this.submitButton=page.locator('#login-button');

  }

  //Actions
  async navigateToLoginPage(){
    await this.page.goto("https://www.saucedemo.com/");

  }
   async login(username,password){
    await this.usernameInput.fill(username);
    await this.paswordInput.fill(password);
    await this.submitButton.click();
    await this.page.waitForTimeout(3000);
    console.log("After login url is "+await this.page.url());

   }
}