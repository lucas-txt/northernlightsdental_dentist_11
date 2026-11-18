export const site = {
  name: "Northern Lights Dental",
  tagline: "Professional Dental Care for the Entire Family",
  welcome: "We love to see you smile!",
  phone: "701-551-2000",
  phoneHref: "tel:+17015512000",
  email: "info@nldentalfargo.com",
  emailHref: "mailto:info@nldentalfargo.com",
  address: "4150 19th Ave S Suite 301 Fargo, ND 58103",
  street: "4150 19th Ave S Suite 301",
  city: "Fargo",
  state: "ND",
  postalCode: "58103",
  hours: "M-Th 8:00am-5:00pm Friday 8:00am-noon",
  hoursShort: "M-Th 8–5 · Fri 8–12",
  audience: "ages 1 to 101+",
  serviceArea: "Fargo, North Dakota and surrounding communities",
  coordinates: "46.848475,-96.849786",
  mapsUrl:
    "https://maps.google.com/maps?ll=46.848475,-96.849786&z=16&hl=en-US&gl=US",
  virtualTour: "https://nldentalfargo.com/virtual-tour/",
  patientForms: "https://nldentalfargo.com/patient-forms/",
  payOnline: "https://bcpay.online/?Profile=cschmaltzWEB",
  facebook: "https://fb.me/NLDentalFargo",
  instagram: "https://instagram.com/NLDentalFargo",
  youtube:
    "https://www.youtube.com/channel/UCACX0VWprDiWl7NtI_BJCrw/featured",
  copyright: "© Copyright - Northern Lights Dental",
  credit: "Website by Agency MABU",
} as const;

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  title: string;
  category: string;
  icon:
    | "sparkles"
    | "shield"
    | "smile"
    | "crown"
    | "activity"
    | "heart"
    | "sun";
};

export const services: Service[] = [
  { title: "General exams and cleanings", category: "Preventive", icon: "shield" },
  { title: "Sealants and fillings", category: "Preventive", icon: "sparkles" },
  {
    title: "Denture fabrication and fittings",
    category: "Restorative",
    icon: "smile",
  },
  {
    title: "Same-day crowns, bridges, and veneers",
    category: "Restorative & cosmetic",
    icon: "crown",
  },
  {
    title: "Implants and root canal treatment",
    category: "Restorative",
    icon: "activity",
  },
  { title: "Gum disease treatment", category: "Periodontal", icon: "heart" },
  { title: "Professional tooth whitening", category: "Cosmetic", icon: "sun" },
];

export type Doctor = {
  slug: string;
  name: string;
  firstName: string;
  role: string;
  image: string;
  preview: string;
  quote: string;
  bio: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "dr-chris-schmaltz",
    name: "Dr. Chris Schmaltz",
    firstName: "Chris",
    role: "Dentist, Northern Lights Dental",
    image: "/assets/images/dr-chris.jpg",
    preview:
      "I take great pride in growing up on a farm outside of Rugby, ND where many of my values in life were established.",
    quote:
      "I have a strong desire to learn and will likely ask you about areas in which you are knowledgeable.",
    bio: [
      "I take great pride in growing up on a farm outside of Rugby, ND where many of my values in life were established. I attended North Dakota State University for five years and graduated with a bachelor’s degree in Exercise Science as well as taking many electives that prepared me for my career. I obtained my Doctor of Dental Surgery degree from University of Minnesota in 2013 and have practiced in the Fargo-Moorhead area ever since. I lived in two other cities and have known early on that I wanted to make the F-M area my home. My wife and I enjoy staying active in the community as we strive to leave our positive impact on society.",
      "I make an effort to try everything once. Some of my favorite hobbies are photography, guitar, gardening, assisting on the family farm, hunting, fishing, running (I’ve only missed two Fargo marathons so far!), strength training, following just about every sport, and traveling. I have a strong desire to learn and will likely ask you about areas in which you are knowledgeable.",
    ],
  },
  {
    slug: "dr-neha-patel",
    name: "Dr. Neha Patel",
    firstName: "Neha",
    role: "Dentist, Northern Lights Dental",
    image: "/assets/images/dr-neha.jpg",
    preview:
      "I was born and raised in India. In 1993, after graduating from a dental school in India, I immigrated to California where I was licensed to practice dentistry and so began my career.",
    quote:
      "I have been providing dental care in the Fargo-Moorhead area for over 15 years.",
    bio: [
      "I was born and raised in India. In 1993, after graduating from a dental school in India, I immigrated to California where I was licensed to practice dentistry and so began my career. After practicing dentistry in California for a couple of years, I moved to North Dakota when my husband started a business in Fargo.",
      "I have been providing dental care in the Fargo-Moorhead area for over 15 years. I bring small town values and ensure my patients’ dental needs are fully taken care of. I believe my strength is in using innovative diagnostics with less invasive procedures. This produces more reliable results while achieving high patient comfort. It also reduces the individual’s recovery time, resulting in very satisfied patients. I enjoy getting to know my patients and meeting their dental needs.",
      "When away from the office, I enjoy being with my family and following my son’s life at college. I also enjoy reading, cooking and learning saxophone.",
    ],
  },
  {
    slug: "dr-courtney-gieseke",
    name: "Dr. Courtney Gieseke",
    firstName: "Courtney",
    role: "Dentist, Northern Lights Dental",
    image: "/assets/images/dr-courtney.jpg",
    preview:
      "I have practiced dentistry in the FM area since 2009 after graduating from the University of Minnesota.",
    quote: "I believe we best help ourselves by helping others.",
    bio: [
      "I have practiced dentistry in the FM area since 2009 after graduating from the University of Minnesota. My first eight years in the field were dedicated to public health, and I continue to volunteer at the Red River Dental Access clinic and work at an access clinic in Halstad, MN. I believe we best help ourselves by helping others. Involving and educating patients in making treatment decisions is a focus of my daily practice. Developing relationships as I care for patients and their families is what makes my career so enjoyable.",
      "I have been a lifelong North Dakota resident and was raised on a farm about an hour north of Fargo. My husband and I live in West Fargo and fill our days raising two energetic young boys and a sweet and spicy little girl. In the winter, we love visiting grandparents in Arizona and heading west to Montana to downhill ski. We spend the warm weather weekends with our extended family at our Minnesota lake home enjoying water sports and nature. I am grateful to have a very close-knit family who values hard work and time together.",
      "BC (before children), I was an avid reader, loved traveling and had a variety of hobbies. If you have list of book titles other than Goodnight Goodnight Construction Site or Scorpions vs Tarantulas, please share your suggestions!",
    ],
  },
];

export type NewsItem = {
  title: string;
  date: string;
  displayDate: string;
  image: string;
  href: string;
  alt: string;
};

export const news: NewsItem[] = [
  {
    title:
      "Your Child's Dental Health- The Early Years by a dentist and a mental health professional",
    date: "2020-04-17",
    displayDate: "April 17, 2020",
    image: "/assets/images/news-child-health.jpg",
    href: "https://nldentalfargo.com/2020/04/17/your-childs-dental-health-the-early-years-by-a-dentist-and-a-mental-health-professional/",
    alt: "A young patient at Northern Lights Dental",
  },
  {
    title: "Introducing NLD Star Discount Plan!",
    date: "2020-03-02",
    displayDate: "March 2, 2020",
    image: "/assets/images/news-star-plan.jpg",
    href: "https://nldentalfargo.com/2020/03/02/star-discount-plan-for-patients-without-dental-insurance/",
    alt: "NLD Star Discount Plan announcement",
  },
  {
    title: "Some of our favorite cases...",
    date: "2018-12-18",
    displayDate: "December 18, 2018",
    image: "/assets/images/news-favorite-cases.jpg",
    href: "https://nldentalfargo.com/2018/12/18/some-of-our-favorite-cases/",
    alt: "A selection of Northern Lights Dental cases",
  },
];

export const quickLinks = [
  {
    label: "Virtual Tour",
    description: "See our location in 3D",
    href: site.virtualTour,
    icon: "orbit" as const,
  },
  {
    label: "Patient Forms",
    description: "Download your forms here",
    href: site.patientForms,
    icon: "file" as const,
  },
  {
    label: "Pay Online",
    description: "Make a payment online",
    href: site.payOnline,
    icon: "card" as const,
  },
];

export const faqs = [
  {
    question: "Are you accepting new patients?",
    answer: "Yes — Accepting New Patients! Call 701-551-2000 to schedule.",
  },
  {
    question: "What ages do you treat?",
    answer:
      "Northern Lights Dental offers professional dental care in a warm, welcoming environment for ages 1 to 101+.",
  },
  {
    question: "What are your office hours?",
    answer: "M-Th 8:00am-5:00pm Friday 8:00am-noon.",
  },
  {
    question: "Where are you located?",
    answer: "4150 19th Ave S Suite 301 Fargo, ND 58103.",
  },
  {
    question: "Do you offer same-day crowns?",
    answer:
      "Yes. Our services include same-day crowns, bridges, and veneers.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "Call 701-551-2000 or fill out the appointment form and we’ll get in touch with you soon.",
  },
];

export const stats = [
  { value: 3, suffix: "", label: "Dentists on the team" },
  { value: 7, suffix: "", label: "Services under one roof" },
  { value: 15, suffix: "+", label: "Years in Fargo-Moorhead" },
  { value: 101, suffix: "+", label: "Ages 1 to 101+ welcome" },
];

export const gallery = [
  {
    src: "/assets/images/about-team.jpg",
    alt: "The Northern Lights Dental team together in the practice",
    caption: "Our practice",
    span: "wide" as const,
  },
  {
    src: "/assets/images/office-7657.jpg",
    alt: "A bright treatment room at Northern Lights Dental",
    caption: "Office",
    span: "tall" as const,
  },
  {
    src: "/assets/images/team-5753.jpg",
    alt: "Northern Lights Dental team members",
    caption: "Our team",
    span: "normal" as const,
  },
  {
    src: "/assets/images/young-patient.jpg",
    alt: "A young dental patient smiling",
    caption: "Care for every age",
    span: "normal" as const,
  },
];
