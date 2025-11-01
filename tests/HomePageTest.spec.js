
const{test,expect}=require('@playwright/test')
// import{test,expect} from '@playwright/test';
test('Home page',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  const pageTitle=await page.title();
  console.log('Page Title is: ',pageTitle);
  
  //To print url
  const pageURL=page.url();
  console.log('Page URL is: ',pageURL);
  // await page.screenshot({path:'screenshot.png'});
  await page.fill('[name="user-name"]',"standard_user")
  await page.fill('[name="password"]',"secret_sauce")
  //Click Submit
await page.click('#login-button');
// await page.waitForTimeout(5000);
// await page.screenshot({path:'login.png'});
//  await page.waitForTimeout(5000);
// await page.locator('#upload_btn').scrollIntoViewIfNeeded();
// await page.locator('#upload_btn').click();
//  await page.waitForTimeout(5000)

  // const uploadButton =await page.locator('button.btn');
  // uploadButton.click();

  // await page.click(button['#upload_farm']);
  // //check for cancle button working or not 
  // await page.click('.swal2-close');
  // //Again click Add button
  //   await page.click('#upload_farm');
  //   //Add  farm 
  //   await page.click(img[alt="Image 1"]);

  //  await page.close();




})