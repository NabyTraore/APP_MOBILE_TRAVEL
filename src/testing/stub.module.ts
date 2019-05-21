import { NgModule } from '@angular/core';
import { RouterOutletStubComponent, RouterLinkStubDirective, RouterStub, ActivatedRouteStub } from './router-stubs';

/**
 * Stub module : This module is only used in purpose of AOT compilation to avoi
 * having unused component in the project.
 */
@NgModule({
  declarations: [
    RouterOutletStubComponent,
    RouterLinkStubDirective
  ],
  exports: [
    RouterOutletStubComponent,
    RouterLinkStubDirective
  ],
  providers: [
    RouterStub,
    ActivatedRouteStub
  ]
})
export class StubModule { }
