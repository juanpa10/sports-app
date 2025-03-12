import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-successful-reg',
  templateUrl: './successful-reg.component.html',
  styleUrls: ['./successful-reg.component.css'],

  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
        RouterModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class SuccessfulRegComponent {
  constructor() {}

  ngOnInit(): void {}
}
