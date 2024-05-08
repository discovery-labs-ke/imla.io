export const baseData = {
  title: "Imla",
  description: `Save time, Do more. 
  Automatic speech recognition software tailored for Africa.
  `,
}

export const socialData = [
  {
    href: "https://github.com/skiiyuru",
    icon: "github",
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/skiiyuru/",
    icon: "linkedin",
    title: "Linked In",
  },
  {
    href: "https://twitter.com/snkiiyuru",
    icon: "twitter",
    title: "Twitter",
  },
]

type FooterLink = {
  name: string
  href: string
}

type FooterGroup = {
  name: string
  children: FooterLink[]
}

export const footerLinks: FooterGroup[] = [
  {
    name: "Info",
    children: [
      {
        name: "Features",
        href: "#features",
      },
      {
        name: "FAQ",
        href: "#faq",
      },
      {
        name: "Pricing",
        href: "#pricing",
      },
    ],
  },
  {
    name: "Company",
    children: [
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  {
    name: "Legal",
    children: [
      {
        name: "Privacy Policy",
        href: "/legal/privacy.pdf",
      },
      {
        name: "Terms of Service",
        href: "/legal/terms.pdf",
      },
    ],
  },
]

export const pricingBundles = [
  {
    bundle: "1.5 hours",
    price: 150,
  },
  {
    bundle: "100 hours",
    price: 4800,
  },
]

export const pricingBenefits = [
  "Speaker identification and timestamps",
  "Email support",
  "Multiple download formats",
  "Sentiment analysis",
  "Summary generation",
  "And many more data analysis features powered by Imla Assistant",
]
