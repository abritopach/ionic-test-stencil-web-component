# Ionic-Test-Stencil-Web-Component

Sample project that shows an integration of [counter demo web component build with StencilJS](https://github.com/abritopach/stencil-counter) 
in Ionic Demo App.

## Running

Before you go through this example, you should have at least a basic understanding of Ionic concepts. You must also already have Ionic installed on your machine.

* Test in localhost:

```bash
https://github.com/abritopach/ionic-test-stencil-web-component
```

To run it, cd into `ionic-test-stencil-web-component` and run:

```bash
npm install
ionic serve
```

* Test in Android: 

```bash
ionic cordova add platform android
ionic cordova run android
```

* Test in iOS: 

```bash
ionic cordova add platform ios
ionic cordova run ios
```

## Integrate Web Component in Ionic

Steps

* In your Ionic project copy web componet build folder in src/assets/lib (for example).

* In src/app/app.module.ts

```bash
import { CUSTOM_ELEMENTS_SCHEMA } from ‘@angular/core’;
```

* Add 

```bash
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
```

* Example

```bash
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CounterWrapperComponent } from '../components/counter-wrapper/counter-wrapper';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CounterWrapperComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
```

* Use your web component in page (for example home.ts)

```bash
<ion-header>
    <ion-navbar>
        <ion-title>
            Stencil WC Ionic
        </ion-title>
    </ion-navbar>
</ion-header>

<ion-content padding>
    <counter-wrapper>
        <my-counter start="10" min="0" max="100" step="5"></my-counter>
    </counter-wrapper>
</ion-content>
```

## Requirements

* [Node.js](http://nodejs.org/)
* [Ionic Cordova](https://ionicframework.com/docs/intro/installation/)

## License
   
The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   
Original work Copyright (c) 2017 Adrián Brito

