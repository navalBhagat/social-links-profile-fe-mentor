import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { Profile } from './profile';
import { LinksComponent } from './links/links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ProfilePictureComponent,
    ProfileDetailsComponent,
    LinksComponent,
  ],
  template: `<main class="profile-box">
    <app-profile-picture [imagePath]="profile.imagePath"> </app-profile-picture>
    <app-profile-details
      [profileDetails]="profile.profileDetails"
    ></app-profile-details>
    <app-links [links]="profile.links"></app-links>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  profile: Profile = {
    imagePath: './assets/images/avatar-jessica.jpeg',
    profileDetails: {
      name: 'Jessica Randall',
      city: 'London',
      country: 'United Kingdom',
      bio: '"Front-end developer and avid reader."',
    },
    links: [
      { name: 'GitHub' },
      { name: 'Frontend Mentor' },
      { name: 'LinkedIn' },
      { name: 'Twitter' },
      { name: 'Instagram' },
    ],
  };
}
