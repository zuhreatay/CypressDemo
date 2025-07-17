import LoginPage from '../support/pages/LoginPage';
import InventoryPage from '../support/pages/InventoryPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';
import CheckoutOverviewPage from '../support/pages/CheckoutOverviewPage';

describe('E-ticaret kullanici akisi- SauceDemo', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const checkoutOverviewPage = new CheckoutOverviewPage();

  it('Kullanici alisveris akisini tamamlar', () => {
    // Ana sayfa / login
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    // Ürün seçimi ve sepete ekleme
    inventoryPage.addToCart('Sauce Labs Backpack');
    inventoryPage.goToCart();

    // Sepet -> Ödeme
    cartPage.clickCheckout();

    // Kullanıcı bilgileri girilir
    checkoutPage.fillInformation('Ali', 'Veli', '12345');
    checkoutPage.clickContinue();

    // Sipariş onayı ve tamamlanması
    checkoutOverviewPage.clickFinish();

    // Başarı sayfası doğrulaması
    checkoutOverviewPage.verifySuccess();
  });
});
