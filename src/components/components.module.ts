import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    SearchResultsComponent
  ]
})

export class ComponentsModule {

}
