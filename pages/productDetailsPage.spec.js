const {expect}= require('@playwright/test');
exports.productDetailsPage=class productDetailsPage{
  constructor(page){
    this.page=page;
    this.itemsAll = page.locator("//div[@class='inventory_list']//div[@class='inventory_item']");
    this.productName = page.locator("//div[@class='inventory_item_label']");
    this.addToCart = page.locator("//button[@name='add-to-cart-sauce-labs-backpack']");
  }

  //Actions
  async productDetails(){
  
  console.log("Current URL:", this.page.url());
const html = await this.page.content();
console.log("Page HTML length:", html.length);
await this.page.waitForLoadState('networkidle');

  
    // Optional pause (3 seconds)
    await this.page.waitForTimeout(3000);
    console.log(await this.itemsAll.first().isVisible());

  // Count them
  const count = await this.itemsAll.count();
  console.log("✅ Total items are:", count +" There names are ");
  for(let i=0;i<count;i++){
    const itemName = await this.itemsAll.nth(i).locator(".inventory_item_name").textContent();
    console.log(`Item ${i + 1}: ${itemName}`);
  }
  console.log("Add to cart count:", await this.addToCart.count());
  await this.addToCart.click();
  await this.page.waitForTimeout(3000);

  }
}