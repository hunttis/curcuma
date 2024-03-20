export interface Settings {
  activeLocationImage?: string
  activeLogo: string
  browserTitle?: string
  companyinfo?: string
  dateFormat: string
  features?: Features
  introText?: string
  location?: Location
  openingHours?: OpeningHours
  pageSubtitle: string
  pageTitle: string
  privacyPolicy?: string
  showSponsors?: boolean
  subtitleTextColor: string
  theme: string
  titleBarAngle: string
  titleBarColor: string
  titleBarColor2: string
  titleBarPercentage: string
  titleTextColor: string
  footer?: { [key: string]: Footer }
  locationImage?: string
}

interface Features {
  events: Feature
  highlights: Feature
  storeinfo: Feature
}

interface Feature {
  active: boolean
  introtext: boolean
}

interface Location {
  address: string
  directions: string
  email: string
  phone: string
}

export interface OpeningHours<T = string> {
  additionalinfo: T
  monday: T
  tuesday: T
  wednesday: T
  thursday: T
  friday: T
  saturday: T
  sunday: T
}

export interface Footer {
  link: string
  image: string
  text: string
}
