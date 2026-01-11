import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 py-6">
            <button
                className="w-full flex justify-between items-center text-left hover:text-primary transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-dark leading-tight pr-4">{question}</span>
                <span className="text-primary flex-shrink-0">
                    <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-600 leading-relaxed animate-fade-in-up">
                    {answer}
                </div>
            )}
        </div>
    );
};

export const FAQPage = () => {
    const faqs = [
        {
            question: "What is RM Solutions (CompanyRM)?",
            answer: "RM Solutions, also known as CompanyRM, is a Sri Lankan-based technology firm founded by Risath Manvidu. We specialize in developing advanced AI-powered tools focused on privacy, security, and educational automation. Our mission is to make high-end AI technology accessible and useful for individuals and enterprises globally."
        },
        {
            question: "What AI products do you offer?",
            answer: "We offer a suite of specialized tools: RM Video FaceBlur for automated privacy in videos, Secure Data Vault for military-grade document encryption, Student AI Assistant for academic research, and custom AI Researcher tools that support both Sinhala and English languages."
        },
        {
            question: "Does your AI support the Sinhala language?",
            answer: "Yes, one of our core strengths is bilingual support. Our AI Researcher and Student AI tools are specifically optimized for the Sinhala language (සිංහල භාෂාව) alongside English, using custom-trained NLP models to ensure accuracy and contextual relevance for Sri Lankan users."
        },
        {
            question: "How does RM Video FaceBlur work?",
            answer: "RM Video FaceBlur uses advanced computer vision and deep learning models to automatically detect human faces in video files. Once detected, the system applies a high-quality Gaussian blur to ensure anonymity while maintaining the integrity of the rest of the video. It's designed to be fast and GDPR-compliant."
        },
        {
            question: "Is Secure Data Vault really 'military-grade'?",
            answer: "Yes. Secure Data Vault utilizes AES-256 (Advanced Encryption Standard with a 256-bit key), which is the same standard used by governments and financial institutions worldwide to protect top-secret information. Data is encrypted client-side, meaning only you have the keys to your files."
        },
        {
            question: "Can I use Student AI Assistant for free?",
            answer: "We offer a generous 'Free Tier' for the Student AI Assistant that includes basic research tools and citation management. For advanced features like automated exam generation and deep literature analysis, we offer premium plans tailored for researchers and students."
        },
        {
            question: "Who is the founder of RM Solutions?",
            answer: "RM Solutions was founded by Risath Manvidu, a technology innovator and AI developer from Sri Lanka. Risath leads the development team and vision for the company, focusing on ethical AI development and data privacy."
        },
        {
            question: "Is my data safe with CompanyRM?",
            answer: "Security is our top priority. We follow strict GDPR guidelines for data processing. For our vault product, we use zero-knowledge architecture. For other tools, we ensure that data is only used for the intended purpose and is never sold to third parties."
        },
        {
            question: "How do I sign up for an account?",
            answer: "You can sign up by clicking the 'Sign In' button in the navigation bar and selecting the 'Create Account' option. You'll need to provide a valid email address and choose a secure password to get started."
        },
        {
            question: "Do you offer API access for developers?",
            answer: "Yes, we provide the Privacy Shield API which allows developers to integrate our GDPR-compliant data masking and face blurring technology directly into their own applications. Contact our enterprise team for API documentation and access tokens."
        },
        {
            question: "What is the 'Auto-Translator Pro'?",
            answer: "Auto-Translator Pro is our real-time voice and text translation tool. It supports over 50+ languages and is specifically optimized for technical and legal terminology, making it ideal for international business communication."
        },
        {
            question: "How does 'Exam Prep Gen' work?",
            answer: "Exam Prep Gen allows students to upload their lecture notes or textbooks. The AI then analyzes the material and generates practice quizzes, flashcards, and summaries to help reinforce learning and test knowledge before exams."
        },
        {
            question: "Are your tools mobile-friendly?",
            answer: "Absolutely. All RM Solutions web applications are designed with a mobile-first approach. You can access our tools from any modern smartphone or tablet browser with a seamless user experience."
        },
        {
            question: "Can enterprises get custom-branded versions of your tools?",
            answer: "Yes, we offer white-labeling and custom deployment options for our Secure Vault and Privacy tools. This allows large organizations to provide our technology to their employees under their own brand name."
        },
        {
            question: "What makes your AI Researcher different from others?",
            answer: "Unlike generic AI models, our Researcher tool is specifically optimized for localized contexts and bilingual (Sinhala/English) data. It provides more accurate citations and understands local regional nuances better than global alternatives."
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via email at support@companyrm.lk. We aim to respond to all inquiries within 24 hours. For enterprise customers, we also offer live chat and dedicated account management."
        },
        {
            question: "Do you have a sitemap for navigation?",
            answer: "Yes, we provide a sitemap link in our footer and an automated XML sitemap for search engines to ensure all our helpful content and product guides are easily discoverable."
        },
        {
            question: "Is CompanyRM GDPR compliant?",
            answer: "Yes, we take privacy seriously. We have designed our systems from the ground up to be compliant with the General Data Protection Regulation (GDPR), ensuring users have control over their data and that privacy is maintained by default."
        },
        {
            question: "What is your refund policy?",
            answer: "We offer a 7-day money-back guarantee for our premium subscriptions if you are not satisfied with the service. Please contact our billing department at billing@companyrm.lk for assistance with refunds."
        },
        {
            question: "Do you offer discounts for educational institutions?",
            answer: "Yes, we have special pricing plans for schools and universities in Sri Lanka and abroad. We believe in empowering the next generation with AI tools and offer substantial discounts for bulk student licenses."
        },
        {
            question: "Where are your servers located?",
            answer: "We use a distributed cloud infrastructure with primary nodes in secure data centers in the Singapore and US regions to ensure low latency and high availability for our global user base."
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h1>
                <p className="text-gray-600 text-lg">Everything you need to know about RM Solutions and our AI tools.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            <div className="mt-16 text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
                <h3 className="text-2xl font-bold text-dark mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/30">
                    Get in Touch
                </button>
            </div>
        </div>
    );
};
