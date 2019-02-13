import { Component } from '@angular/core';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
