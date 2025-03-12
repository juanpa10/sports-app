import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder } from '@angular/forms';

interface Rutina {
  rutina: string;
  intensidad: string;
  tiempo: string;
  fecha: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  displayedColumns: string[] = ['rutina', 'intensidad', 'tiempo', 'fecha'];
  constructor(private fb: FormBuilder, private router: Router) {
  }
  dataSource: Rutina[] = [
    { rutina: 'Full Body', intensidad: 'Intermedio', tiempo: '45 min', fecha: '12/02/2025' },
    { rutina: 'Cardio HIIT', intensidad: 'Intenso', tiempo: '30 min', fecha: '15/02/2025' },
    { rutina: 'Yoga Restaurativo', intensidad: 'Suave', tiempo: '40 min', fecha: '18/02/2025' },
    { rutina: 'Fuerza Tren Superior', intensidad: 'Intermedio', tiempo: '50 min', fecha: '20/02/2025' },
    { rutina: 'Piernas y Glúteos', intensidad: 'Intermedio', tiempo: '45 min', fecha: '22/02/2025' },
    { rutina: 'Espalda y Bíceps', intensidad: 'Intenso', tiempo: '35 min', fecha: '24/02/2025' },
    { rutina: 'Zumba', intensidad: 'Suave', tiempo: '60 min', fecha: '25/02/2025' },
    { rutina: 'Pilates', intensidad: 'Suave', tiempo: '50 min', fecha: '27/02/2025' },
    { rutina: 'Circuito de Fuerza', intensidad: 'Intenso', tiempo: '40 min', fecha: '28/02/2025' },
    { rutina: 'Entrenamiento en Intervalos', intensidad: 'Intenso', tiempo: '30 min', fecha: '01/03/2025' },
    { rutina: 'Crossfit', intensidad: 'Intenso', tiempo: '55 min', fecha: '03/03/2025' },
    { rutina: 'Estiramientos y Flexibilidad', intensidad: 'Suave', tiempo: '20 min', fecha: '05/03/2025' },
    { rutina: 'Entrenamiento Funcional', intensidad: 'Intermedio', tiempo: '45 min', fecha: '07/03/2025' },
    { rutina: 'Cardio en Cinta', intensidad: 'Intermedio', tiempo: '35 min', fecha: '09/03/2025' },
    { rutina: 'HIIT Avanzado', intensidad: 'Intenso', tiempo: '25 min', fecha: '10/03/2025' },
    { rutina: 'Circuito de Core', intensidad: 'Intermedio', tiempo: '30 min', fecha: '12/03/2025' },
    { rutina: 'Stretching Profundo', intensidad: 'Suave', tiempo: '20 min', fecha: '14/03/2025' },
    { rutina: 'Boxeo Fitness', intensidad: 'Intenso', tiempo: '40 min', fecha: '16/03/2025' },
    { rutina: 'Entrenamiento de Resistencia', intensidad: 'Intermedio', tiempo: '50 min', fecha: '18/03/2025' }
  ];

  onVolver(): void {

    this.router.navigate(['/dashboard']);
  }
}
