import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-picture-container">
      <img class="profile-picture" [src]="imagePath" alt="profile picture" />
    </div>
  `,
  styleUrl: './profile-picture.component.css',
})
export class ProfilePictureComponent {
  @Input()
  imagePath!: string;
}
