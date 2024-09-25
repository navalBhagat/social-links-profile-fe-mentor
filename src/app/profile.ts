export interface Profile {
  imagePath: string;
  profileDetails: ProfileDetails;
  links: Link[];
}

export interface ProfileDetails {
  name: string;
  city: string;
  country: string;
  bio: string;
}

export interface Link {
  name: string;
}
