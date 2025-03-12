import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
ejercicio: any;
svg: any;
heartRate: any;
intensidad: any;

  constructor() { }

  ngOnInit() {
    this.ejercicio= 'Fuerza'
    this.svg = 'overhead'
    this.heartRate = 75
    this.intensidad = 'media'
  }
  onFuerza() {
    this.ejercicio= 'Fuerza'
    this.svg = 'overhead'
    this.heartRate = 75
    this.intensidad = 'media'
  }
  onPushUps() {
    this.ejercicio= 'Push Ups'
    this.svg = 'mancuerna'
    this.heartRate = 68
    this.intensidad = 'alta'
  }
  onCardio() {
    this.ejercicio= 'Cardio'
    this.svg = 'bici'
    this.heartRate = 120
    this.intensidad = 'muy alta'
  }
}