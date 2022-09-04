export const CONSTANTS = {
    EMAIL_VALIDATION_REGEX: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export interface SocialMediaDeeplink {
    iconName: string
    href: string
}

export const MEDIA_LINKS: SocialMediaDeeplink[] = [
    {iconName: 'mdi-github', href: 'https://github.com/rauschdo'},
    {iconName: 'mdi-linkedin', href: 'https://www.linkedin.com/in/dominik-rausch/'},
    {iconName: 'mdi-twitter', href: 'https://twitter.com/rauschdo'},
    {iconName: 'mdi-instagram', href: 'https://www.instagram.com/rausch.do/'}
]
