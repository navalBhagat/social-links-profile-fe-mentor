import { Component, Input } from '@angular/core';
import { ProfileDetails } from '../profile';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [],
  template: `<section class="profile-details-container">
    <span class="name">{{ profileDetails.name }}</span>
    <span class="location"
      >{{ profileDetails.city }}, {{ profileDetails.country }}</span
    >
    <span class="bio">{{ profileDetails.bio }}</span>
  </section>`,
  styleUrl: './profile-details.component.css',
})
export class ProfileDetailsComponent {
  @Input()
  profileDetails!: ProfileDetails;
}
