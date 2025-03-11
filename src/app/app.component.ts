import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos CommonModule y los módulos de Angular Material necesarios
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sports App';
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    // Registra los íconos SVG
    iconRegistry.addSvgIcon(
      'overhead',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/overhead.svg')
    );
    iconRegistry.addSvgIcon(
      'bici',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bici.svg')
    );
    iconRegistry.addSvgIcon(
      'cardio',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cardio.svg')
    );
    iconRegistry.addSvgIcon(
      'bicep',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bicep.svg')
    );
    iconRegistry.addSvgIcon(
      'crono',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/crono.svg')
    );
    iconRegistry.addSvgIcon(
      'mancuerna',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mancuerna.svg')
    );
  }
}
