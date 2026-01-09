import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { App } from './app/app';
import { register as registerSwiperElements } from 'swiper/element/bundle';
// ...
registerSwiperElements();// ✅ registers <swiper-container> & <swiper-slide>
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
