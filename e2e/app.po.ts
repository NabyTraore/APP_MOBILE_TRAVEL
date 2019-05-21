import { browser, element, by } from 'protractor';


/**
 * App page object class
 */
export class AppPage {

  /**
   * Navigate to default page app
   */
  navigateTo() {
    return browser.get('/');
  }

  /**
   * Get header
   */
  getHeader() {
    return element(by.css('#bandeau-portail'));
  }

  /**
   * Get Sidebar Button
   */
  getSidebarButton() {
    return element(by.css('.uit-sidebar-header-container .mat-button'));
  }

  /**
   * Get Sidebar
   */
  getSidebar() {
    return element(by.css('uit-sidebar'));
  }

  /**
   * Get Sidebar Menu
   */
  getSidebarMenu() {
    return element(by.css('.uit-sidebar-wrapper'));
  }

  /**
   * Get Sidebar Menu
   */
  getSidebarMenuItems() {
    return element.all(by.css('.uit-sidebar-wrapper a'));
  }

  /**
   * Get Sidebar
   */
  getFooter() {
    return element(by.css('uit-footer'));
  }

  /**
   * Banner User icon button
   */
  getBannerUserIcon() {
    return element(by.css('#loginToggle'));
  }

  /**
   * Banner connection button
   */
  getBannerConnectButton() {
    return element(by.css('#connectButtn'));
  }

  /**
   * Form identifier field
   */
  getPopupFormIdField() {
    return element(by.css('#login'));
  }

  /**
   * Form password field
   */
  getPopupFormPasswordField() {
    return element(by.css('#password'));
  }

  /**
   * Form submit button
   */
  getPopupFormSubmitButton() {
    return element(by.css('#loginButton'));
  }

  /**
   * Connected class
   */
  getConnectedDiv() {
    return element(by.css('.connected'));
  }

  /**
   * Check id the user is already connected
   */
  isConnected() {
    return this.getConnectedDiv().isElementPresent('.connected');
  }

  /**
   * Get firstanme div
   */
  getFirstnameConnectedDiv() {
    return element(by.css('.username-box > .first-name'));
  }
}
