import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

/**
 * Home page object class
 */
export class HomePage extends AppPage {

    /**
     * Navigate to home page
     */
    navigateTo() {
        return browser.get('/home');
    }

    /**
     * Get jumbotron
     */
    getJumbotron() {
        return element(by.css('#home'));
    }
}
