import { Component, Input } from '@angular/core';

import { User } from '../../models/user.interface';

@Component({
  selector: 'search-results',
  templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent {

  @Input() user: User

}
