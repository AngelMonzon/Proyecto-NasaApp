import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { APODComponent } from './pages/APOD/APOD.component';
import { MarsRoverPhotosComponent } from './pages/mars-rover-photos/mars-rover-photos.component';
import { NasaImageVideoComponent } from './pages/nasa-image-video/nasa-image-video.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { CardSidebarComponent } from './components/card-sidebar/card-sidebar.component';


@NgModule({
  declarations: [
    APODComponent,
    MarsRoverPhotosComponent,
    NasaImageVideoComponent,
    LayoutPageComponent,
    CardSidebarComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    PrimeNGModule,
  ]
})
export class NasaModule { }
