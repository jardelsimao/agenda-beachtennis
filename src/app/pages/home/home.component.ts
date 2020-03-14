import { Component, OnInit } from '@angular/core';
import { PwaService } from 'src/app/pwa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public Pwa: PwaService) {

  }
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
  ngOnInit(): void {
  }

}
