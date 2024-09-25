import { Component, Input } from '@angular/core';
import { Link } from '../profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="links">
    <div class="link" *ngFor="let item of links">
      {{ item.name }}
    </div>
  </section>`,
  styleUrl: './links.component.css',
})
export class LinksComponent {
  @Input() links!: Link[];
}
