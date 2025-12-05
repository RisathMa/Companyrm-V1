
export type Page = 'home' | 'features' | 'products' | 'security' | 'about' | 'auth';

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "RM Video FaceBlur",
    category: "AI Tools",
    description: "Automatically detects and blurs faces in videos using advanced machine learning.",
    badge: "Most Popular",
    badgeColor: "bg-gradient-primary",
    icon: "fa-video"
  },
  {
    id: 2,
    title: "Secure Data Vault",
    category: "Security",
    description: "Military-grade encryption for your most sensitive enterprise documents.",
    badge: "New v2.0",
    badgeColor: "bg-success",
    icon: "fa-shield-halved"
  },
  {
    id: 3,
    title: "Student AI Assistant",
    category: "Students",
    description: "Research faster and organize citations with our academic AI companion.",
    badge: "Free Tier",
    badgeColor: "bg-blue-400",
    icon: "fa-graduation-cap"
  },
  {
    id: 4,
    title: "Auto-Translator Pro",
    category: "AI Tools",
    description: "Real-time voice and text translation for over 50+ languages.",
    icon: "fa-language"
  },
  {
    id: 5,
    title: "Privacy Shield API",
    category: "Security",
    description: "Integrate GDPR-compliant data masking directly into your applications.",
    badge: "Enterprise",
    badgeColor: "bg-dark",
    icon: "fa-code"
  },
  {
    id: 6,
    title: "Exam Prep Gen",
    category: "Students",
    description: "Generate practice quizzes from your lecture notes instantly.",
    icon: "fa-book-open"
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
  { name: "Arjun Perera", role: "Founder & CEO", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun" },
  { name: "Nimali Fernando", role: "Head of AI", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nimali" },
  { name: "Kevin Dias", role: "Lead Security Engineer", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" },
  { name: "Sarah Khan", role: "Product Manager", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
];
