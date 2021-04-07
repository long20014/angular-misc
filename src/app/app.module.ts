import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomElementsModule } from './custom-elements/custom-elements.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-elements/custom-button/custom-button.component';

const config = {
  // firebase config
};

@NgModule({
  declarations: [AppComponent, CustomButtonComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    // CustomElementsModule
  ],
  providers: [],
  entryComponents: [CustomButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(CustomButtonComponent, {
      injector: this.injector,
    });
    customElements.define('Custom-button', element);
  }

  ngDoBootstrap(): void {}
}
