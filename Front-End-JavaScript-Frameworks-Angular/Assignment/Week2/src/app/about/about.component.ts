import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders : Leader[];

  constructor(private leaderService: LeaderService,
    private location: Location) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders()
  }

  goBack(): void {
    this.location.back();
  }

}
