import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';


describe('E-ticaret kullanici akisi- SauceDemo', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();



  it('Kullanici alisveris akisini tamamlar', () => {
    // Ana sayfa / login
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();


    // Ürün seçimi ve sepete ekleme
    productsPage.addToCart('Sauce Labs Backpack');
    productsPage.goToCart();

    // Sepet -> Ödeme
    productsPage.clickCheckout();

    // Kullanıcı bilgileri girilir
    productsPage.fillInformation('Ali', 'Veli', '12345');
    productsPage.clickContinue();

    // Sipariş onayı ve tamamlanması
    productsPage.clickFinish();

    // Başarı sayfası doğrulaması
    productsPage.verifySuccess();
  });

});
