export const baseData = {
  title: 'Imla',
  description: `Save time, Do more. 
  Automatic speech recognition software tailored for Africa.
  `,
  image: {
    src: '/images/image-default.png',
    alt: 'Imla website',
  },
}

export const socialData = [
  {
    href: 'https://www.linkedin.com/company/discovery-labs-limited/',
    icon: 'linkedin',
    title: 'Linked In',
  },
]

interface FooterLink {
  name: string
  href: string
}

interface FooterGroup {
  name: string
  children: FooterLink[]
}

export const footerLinks: FooterGroup[] = [
  {
    name: 'Info',
    children: [
      {
        name: 'Features',
        href: '/#features',
      },
      {
        name: 'FAQ',
        href: '/#faq',
      },
      {
        name: 'Pricing',
        href: '/pricing',
      },
    ],
  },
  {
    name: 'Company',
    children: [
      {
        name: 'About Us',
        href: '/about',
      },
      {
        name: 'Contact Us',
        href: '/contact-us',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    name: 'Legal',
    children: [
      {
        name: 'Privacy Policy',
        href: 'https://utfs.io/f/7y5sai86eAK4lD0lBbscJwT24eXsrKLZPQv6pjm7axIMOiWu',
      },
      {
        name: 'Terms of Service',
        href: 'https://utfs.io/f/7y5sai86eAK47hBw86eAK4GwOlvgRsiL81hDdQYWzoZTntbS',
      },
    ],
  },
]

export const pricingBundles = [
  {
    bundle: '1.5 hours',
    price: 150,
  },
  {
    bundle: '6 hours',
    price: 600,
  },
  {
    bundle: '16 hours',
    price: 1300,
  },
  {
    bundle: '40 hours',
    price: 2400,
  },
  {
    bundle: '100 hours',
    price: 4800,
  },
]

export const pricingBenefits = [
  'Transcript editor & audio player',
  'Speaker identification & timestamps',
  'Multiple download formats',
  'Email support',
  'Imla AI assistant for: Sentiment analysis, Summary generation & much more to get the most out of your data',
]
