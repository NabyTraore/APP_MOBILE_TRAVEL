import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AtlasMobile } from './app.component';
import { RouterLinkStubDirective } from '../testing/router-stubs';




let comp:    AtlasMobile;
let fixture: ComponentFixture<AtlasMobile>;




//////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule
import { AppModule } from './app.module';


describe('AtlasMobile component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ AppModule ]
    });
  }));



  it('can instantiate the component', () => {
    expect(comp).not.toBeNull();
  });

});

