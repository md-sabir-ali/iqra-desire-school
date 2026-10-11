import type { FaqItem } from "@/components/FaqAccordion";
import { siteConfig } from "@/config/site";

/**
 * ADMISSION FAQs — general, honest answers (no made-up specifics like exact
 * fees or dates). TODO: when the school confirms details (fees, exact session
 * dates, document list), update the relevant answers below.
 */
export const admissionFaqs: FaqItem[] = [
  {
    question: "Which classes are admissions open for?",
    answer: `We offer admissions across ${siteConfig.classesRange}. Seats are limited for each class, so early enquiry is recommended.`,
  },
  {
    question: "How do I apply for admission?",
    answer:
      "It's simple: fill the online enquiry form on this page (or call/WhatsApp the school office). Our team will then guide you to collect and submit the admission form with the required documents, followed by a short interaction.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Commonly required documents include the student's birth certificate, a recent passport-size photograph, and the previous school's report card or transfer certificate (for students joining a higher class). Please contact the school office to confirm the exact list for your child's class.",
  },
  {
    question: "Is the school English medium?",
    answer:
      "Yes. We are an English-medium school and focus on building strong English language skills from the early years, alongside a solid foundation in all core subjects.",
  },
  {
    question: "What is the medium of the admission interaction?",
    answer:
      "For younger classes, it is a friendly, informal interaction with the child and parents to understand the child better. There is no pressure — it simply helps us welcome your child smoothly into the school.",
  },
  {
    question: "How can I know the fee structure?",
    answer:
      "For the most accurate and up-to-date fee details, please contact the school office directly by phone or WhatsApp, or mention it in your enquiry and our team will share the information with you.",
  },
  {
    question: "Whom do I contact for more help?",
    answer: `You can call us at ${siteConfig.contact.phone}, message us on WhatsApp, or email ${siteConfig.contact.email}. Our office team is always happy to help.`,
  },
];
