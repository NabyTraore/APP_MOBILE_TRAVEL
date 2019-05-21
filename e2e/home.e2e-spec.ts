import { browser } from 'protractor';
import { HomePage } from './home.po';
import { environment } from '../src/environments/environment';


/**
 * E2E Home Tests
 */
describe(environment.application_name + ' : Home Page', function () {

    /**
     * Page Object
     */
    let page: HomePage;

    /**
     * Before each tests
     */
    beforeEach(() => {
        page = new HomePage();

        // Navigate to root route
        page.navigateTo();

        // Wait for the app to be completly loaded
        browser.waitForAngular();

    });

    /**
     * @e2e-test : Test if the page is correctly served
     */
    it('Should display the home page', () => {

        // Jumbotron
        expect(page.getJumbotron().getText()).toContain(environment.application_name);

    });
});
