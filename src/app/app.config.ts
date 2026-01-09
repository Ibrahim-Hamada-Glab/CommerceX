import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ] 
  
};
