import { AppPage } from './app.po';
import { browser } from 'protractor';
import { environment } from '../src/environments/environment';

/**
 * E2E App Tests
 */
describe(environment.application_name + ' App', () => {

  /**
   * Page Object
   */
  let page: AppPage;

  /**
   * Before each tests
   */
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  /**
   * @e2e-test : Test if the app is correctly displayed
   *    Here we are going to check if all global
   *    components are correctly displayed
   */
  it('Should display the app layout', () => {

    // Header
    expect(page.getHeader()).toBeTruthy();

    // Footer
    expect(page.getFooter()).toBeTruthy();

    // Sidebar
    expect(page.getSidebar()).toBeTruthy();

    // Sidebar Menu
    expect(page.getSidebarButton()).toBeTruthy();

  });

  /**
   * @e2e-test : Menu Home
   */
  it('Should render home page : home menu item ', () => {
    checkMenuItem(0, 'home');
  });


  /**
   * Check menu item behavior
   *
   * @param index
   */
  function checkMenuItem(index: number, expectedPage: String) {
    // Wait for IDP answer
    browser.sleep(1000);

    // Click sidebar toggle button
    page.getSidebarButton().click();

    // Check if sidebar is opened
    expect(page.getSidebarMenu().isDisplayed()).toBeTruthy();

    // Wait for the animation to end up
    browser.sleep(500);

    // Click users menu item
    page.getSidebarMenuItems().get(index).click();

    // Expect to be on users page
    expect(browser.getCurrentUrl()).toContain(expectedPage);
  }

});
