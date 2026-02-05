export interface SocialLink {
  url: string
  label: string
  icon: string
}

export interface SocialLinks {
  [key: string]: SocialLink
}

export interface PersonalData {
  title: string
  slogan: string
  description: string
  separator: string
  links: SocialLinks
}
