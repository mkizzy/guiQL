export enum SelectedPage {
    Home =  "home",
    Features = "features",
    Tutorial = "tutorial",
    Blog = "blog",
    ContactUs = "contactus",
}

export interface FeatureType{
    image : JSX.Element,
    title: string,
    description: string
}