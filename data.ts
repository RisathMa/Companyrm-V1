

export type Page = 'home' | 'features' | 'products' | 'security' | 'about' | 'auth';

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
  url: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "RM Video FaceBlur",
    category: "AI Tools",
    description: "Automatically detects and blurs faces in videos using advanced machine learning.",
    badge: "Most Popular",
    badgeColor: "bg-gradient-primary",
    icon: "fa-video",
    url: "https://faceblurpro.companyrm.lk"
  },
  {
    id: 2,
    title: "Secure Data Vault",
    category: "Security",
    description: "Military-grade encryption for your most sensitive enterprise documents.",
    badge: "New v2.0",
    badgeColor: "bg-success",
    icon: "fa-shield-halved",
    url: "https://vault.companyrm.lk"
  },
  {
    id: 3,
    title: "Student AI Assistant",
    category: "Students",
    description: "Research faster and organize citations with our academic AI companion.",
    badge: "Free Tier",
    badgeColor: "bg-blue-400",
    icon: "fa-graduation-cap",
    url: "https://studentai.companyrm.lk"
  },
  {
    id: 4,
    title: "Auto-Translator Pro",
    category: "AI Tools",
    description: "Real-time voice and text translation for over 50+ languages.",
    icon: "fa-language",
    url: "https://translator.companyrm.lk"
  },
  {
    id: 5,
    title: "Privacy Shield API",
    category: "Security",
    description: "Integrate GDPR-compliant data masking directly into your applications.",
    badge: "Enterprise",
    badgeColor: "bg-dark",
    icon: "fa-code",
    url: "https://api.companyrm.lk"
  },
  {
    id: 6,
    title: "Exam Prep Gen",
    category: "Students",
    description: "Generate practice quizzes from your lecture notes instantly.",
    icon: "fa-book-open",
    url: "https://examprep.companyrm.lk"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Journalist at DailyNews",
    text: "RM Video FaceBlur saved me hours of editing time. The accuracy is incredible.",
    rating: 5
  },
  {
    id: 2,
    name: "David Perera",
    role: "CTO, TechLanka",
    text: "Security is paramount for us. RM Solutions delivers enterprise-grade protection seamlessly.",
    rating: 5
  },
  {
    id: 3,
    name: "Kasun De Silva",
    role: "University Student",
    text: "The Student AI tools helped me organize my thesis research 10x faster. Highly recommended!",
    rating: 4
  }
];

export const TEAM = [
  { name: "Risath Manvidu", role: "Founder & CEO", img: "https://i.ibb.co/5xJZ3cKb/581731373-808034715375321-5235741489036203174-n.jpg" },
];

// Cookie Utils
export const setCookie = (name: string, value: string, days: number) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  // Set domain to .companyrm.lk to share cookies across subdomains
  let domain = "";
  if (window.location.hostname.endsWith("companyrm.lk")) {
    domain = "; domain=.companyrm.lk";
  }

  document.cookie = name + "=" + (value || "") + expires + domain + "; path=/";
}

export const getCookie = (name: string) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export const eraseCookie = (name: string) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
