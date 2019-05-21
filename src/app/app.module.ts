import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AtlasMobile } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RelationsService } from './services/relations/relation-service';
import { APP_BASE_HREF } from '@angular/common';
import { RelationPage } from './pages/relation/relation';
import { PairingPage } from './pages/pairing/pairing';
import { PairingPageModule } from './pages/pairing/pairing.module';
import { RelationPageModule } from './pages/relation/relation.module';

@NgModule({
  declarations: [
    AtlasMobile,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AtlasMobile),HttpClientModule,
    PairingPageModule,RelationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AtlasMobile,
    RelationPage,
    PairingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: RelationsService, useClass: RelationsService}
    
  ]
})
export class AppModule {}
