import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Who we help",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Process",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const roadmap = [
  {
    id: "0",
    title: "Book a Demo-Consultation Call",
    text: "Help us understand your needs and goals. We will provide a tailor-made solution for you.",
    date: "Step 1",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Scan Your Space",
    text: "We will arrange a time to scan your space using our technology. This will take about 1-2 hours.",
    date: "Step 2",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Development of 3D Tour",
    text: "We will develop your custom 3D tour based on your needs and goals. Always delivered on time.",
    date: "Step 3",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Outcome and Feedback",
    text: "We will present the 3D tour to you, gather your feedback, and make any necessary adjustments.",
    date: "Step 4",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Engage your audience with interactive 3D virtual tours that captivate and inspire.";

export const collabContent = [
  {
    id: "0",
    title: "Boost Engagement",
    text: collabText,
  },
  {
    id: "1",
    title: "Seamless Integration",
  },
  {
    id: "2",
    title: "Increase Trust",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Immersive 3D Tours That Captivate",
    text: "Step into stunning virtual spaces, perfect for showcasing properties, venues, or projects with lifelike detail.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Access Anywhere, Anytime",
    text: "Experience your 3D tour on any device—VR headsets, desktops, or mobiles—making it easy to share with clients worldwide.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Fast Setup, Lasting Impact",
    text: "Get your 3D tour up and running quickly with HermesView’s streamlined process—saving you time while leaving a lasting impression.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "One Tour, Endless Uses",
    text: "From real estate to tourism to construction, our 3D tours adapt to your needs—showcase, monitor, or plan with ease.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Collaborate in Real-Time",
    text: "Share your 3D tour with teams or clients instantly—perfect for remote planning, inspections, or presentations.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Streamline Your Workflow",
    text: "Customize your 3D tours with HermesView—add hotspots, branding, or interactive features to match your vision.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
