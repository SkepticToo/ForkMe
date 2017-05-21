import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultsPage } from './search-results-page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultsPage),
    ComponentsModule,
  ],
  exports: [
    SearchResultsPage
  ]
})
export class SearchResultsPageModule {}
