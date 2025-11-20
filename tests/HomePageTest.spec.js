
const{test,expect}=require('@playwright/test')
// import{test,expect} from '@playwright/test';
const {LoginPage}=require('../pages/LoginPage');
const { productDetailsPage } = require('../pages/productDetailsPage');

test.beforeEach('Login Test ',async({page})=>{
  const loginpage = new LoginPage(page);
  await loginpage.navigateToLoginPage();
  await loginpage.login('standard_user','secret_sauce');
})

test('Items Details Test',async({page})=>{
  const productDetailspage= new productDetailsPage(page);
  await productDetailspage.productDetails();
})
