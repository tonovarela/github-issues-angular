import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental'
import { provideMarkdown } from 'ngx-markdown';


export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    //provideZoneChangeDetection({ eventCoalescing: true }),
    provideTanStackQuery(new QueryClient(), withDevtools()),
    provideMarkdown(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
