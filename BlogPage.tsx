import React, { useState } from 'react';

interface Article {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
}

const ARTICLES: Article[] = [
    {
        id: 1,
        title: "The Future of Privacy in an AI-Driven World",
        date: "January 10, 2024",
        author: "Risath Manvidu",
        category: "Privacy",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "As artificial intelligence becomes more integrated into our daily lives, the question of data privacy has never been more critical. Explore how we balance innovation with protection.",
        content: `
      <p>As artificial intelligence (AI) continues to reshape every aspect of our digital existence, from the way we shop to the way we consume news, a critical challenge has emerged: how do we harness the power of AI without sacrificing our fundamental right to privacy? At RM Solutions, this isn't just a theoretical question—it's the core problem we solve every day.</p>
      
      <h3>The Data Dilemma</h3>
      <p>AI models, by their very nature, are data-hungry. To provide the personalized experiences we've come to expect—like the bilingual accuracy of our AI Researcher—these models must be trained on vast amounts of information. However, this collection of data often comes at a high cost. Traditional AI development has frequently prioritized model performance over user anonymity, leading to significant privacy risks.</p>
      
      <h3>Privacy-Preserving Technologies</h3>
      <p>The good news is that we are entering a new era of "Privacy-Preserving AI." Technologies like federated learning, differential privacy, and homomorphic encryption are making it possible to train and use AI models without ever exposing raw user data. Our <strong>Secure Data Vault</strong>, for example, utilizes client-side encryption, ensuring that sensitive documents are never accessible to anyone but the owner.</p>
      
      <h3>The Role of Computer Vision</h3>
      <p>In the realm of video and images, privacy risks are even more visible. With the rise of facial recognition technology, identifying individuals in public spaces or online videos has become trivial. This is why tools like <strong>RM Video FaceBlur</strong> are essential. By using AI to automatically detect and obscure faces, we are giving content creators the power to share information while protecting the identities of those involved.</p>
      
      <h3>GDPR and Beyond</h3>
      <p>Regulation like the GDPR (General Data Protection Regulation) has set a high bar for data protection in Europe, and similar laws are being adopted globally. For a Sri Lankan tech company like RM Solutions, being GDPR-compliant from day one isn't just about legal necessity—it's about building trust with a global audience. We believe that users should have full control over their digital footprint.</p>
      
      <h3>Looking Ahead</h3>
      <p>The future of AI will be defined by trust. Companies that fail to respect user privacy will eventually lose their audience. At RM Solutions, we're betting on a future where AI is "private by design." We're constantly researching new ways to minimize data collection while maximizing the value our tools provide. Join us as we build a more secure, more intelligent web for everyone.</p>
    `
    },
    {
        id: 2,
        title: "Empowering Sri Lankan Education with Sinhala AI",
        date: "January 8, 2024",
        author: "Risath Manvidu",
        category: "Education",
        image: "https://images.unsplash.com/photo-1501504905953-f84474b0df82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Discover how specialized Natural Language Processing is breaking language barriers for students in Sri Lanka, making advanced research accessible in Sinhala.",
        content: `
      <p>For too long, the benefits of the AI revolution have been primarily available to English speakers. While global tech giants focus on the most widely spoken languages, regional languages like Sinhala have often been left behind. At RM Solutions, we are on a mission to change that, starting with our <strong>Student AI Assistant</strong>.</p>
      
      <h3>The Complexity of Sinhala NLP</h3>
      <p>Natural Language Processing (NLP) for Sinhala is uniquely challenging. As a morphologically rich language with its own distinct script and grammatical structures, Sinhala requires more than just a simple translation layer. It requires models that truly understand the nuances of the language. Our research team has spent countless hours training models on localized datasets to ensure that our AI can comprehend and generate Sinhala text with high fidelity.</p>
      
      <h3>Bridging the Educational Divide</h3>
      <p>In Sri Lanka, many students and researchers find it difficult to access the latest academic resources, which are predominantly in English. Our <strong>AI Researcher</strong> bridges this gap by providing bilingual support. A student can input a query in Sinhala, and our tool can analyze English research papers and provide a summary or citation in Sinhala. This doesn't just save time; it democratizes access to global knowledge.</p>
      
      <h3>Automated Exam Preparation</h3>
      <p>One of our most popular educational tools, <strong>Exam Prep Gen</strong>, goes a step further. By allowing students to upload their Sinhala-language lecture notes, the AI can generate practice quizzes and flashcards. This kind of active recall is proven to enhance learning outcomes, and providing it in the student's native language makes the process much more effective.</p>
      
      <h3>The Future of Localized AI</h3>
      <p>The success of our Sinhala AI tools is just the beginning. We are exploring ways to expand this technology to other regional languages and to deepen our NLP capabilities. We believe that every student, regardless of their native language, deserves access to the best educational technology available.</p>
      
      <h3>Join the Revolution</h3>
      <p>Education is the foundation of progress. By empowering Sri Lankan students with AI that speaks their language, we are investing in the future of our nation. We invite students and educators to explore our tools and join us in this journey towards a more inclusive educational landscape.</p>
    `
    },
    {
        id: 3,
        title: "Zero-Knowledge Encryption: Why It Matters for Your Data",
        date: "January 5, 2024",
        author: "RM Security Team",
        category: "Security",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Most cloud storage providers can see your files. Discover how RM Solutions' zero-knowledge architecture ensures that you, and only you, have access to your data.",
        content: `
      <p>In a world where data breaches are becoming more frequent and sophisticated, traditional cloud storage is no longer enough. Many popular services encrypt your data on their servers, but they also keep the keys. This means that if their servers are compromised, or if they are required by law, your files could be accessed. At RM Solutions, we use a different approach: <strong>Zero-Knowledge Encryption</strong>.</p>
      
      <h3>What is Zero-Knowledge?</h3>
      <p>Zero-knowledge encryption means that your data is encrypted on your device *before* it ever reaches our servers. The encryption key is derived from your password, which we never store. Because we never have the key, we have "zero knowledge" of what's inside your files. Even if an attacker were to gain access to our servers, they would find nothing but unreadable, encrypted bits.</p>
      
      <h3>The Power of AES-256</h3>
      <p>Our <strong>Secure Data Vault</strong> uses the AES-256 standard—the same encryption used by military organizations. A 256-bit key provides a astronomical number of combinations, making it practically impossible to crack using current technology. This level of security is the foundation of the trust our enterprise users place in us.</p>
      
      <h3>Privacy vs. Convenience</h3>
      <p>A common misconception is that zero-knowledge encryption is difficult to use. We've worked hard to ensure that the user experience is seamless. You can drag and drop files into your vault just like any other folder. The heavy-duty mathematics happens in the background, providing you with top-tier security without the headache.</p>
      
      <h3>Compliance and Responsibility</h3>
      <p>For businesses, zero-knowledge architecture isn't just a security feature; it's a massive help for compliance. By ensuring that sensitive customer data is never accessible to service providers, companies can much more easily meet GDPR and other regulatory requirements. We take the burden of security off your shoulders so you can focus on your business.</p>
      
      <h3>Your Data, Your Control</h3>
      <p>We believe that your data belongs to you. Our commitment to zero-knowledge encryption is a reflection of that belief. In an age of mass surveillance and data mining, RM Solutions is a safe haven for your most important information.</p>
    `
    },
    {
        id: 4,
        title: "How to Build a Privacy-First Content Strategy",
        date: "January 3, 2024",
        author: "Risath Manvidu",
        category: "Guides",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "For journalists and creators, protecting sources and bypassers is a legal and ethical requirement. Learn how to use AI tools to stay compliant and safe.",
        content: `
      <p>Content creation has never been easier, but it has also never been more fraught with legal and ethical pitfalls. From inadvertent data leaks to the exposure of private individuals in public videos, creators face a minefield of privacy concerns. Here is how to build a content strategy that puts privacy first.</p>
      
      <h3>1. Audit Your Data Collection</h3>
      <p>The first step in any privacy strategy is to know what data you are collecting. Are you tracking user behavior on your site? Are you collecting email addresses for a newsletter? Ensure that you have a clear Privacy Policy—like the one provided by RM Solutions—that explains exactly why you need that data and how it's protected.</p>
      
      <h3>2. Protect Identities in Your Visuals</h3>
      <p>If you are a journalist or a YouTuber, you likely have footage of people who haven't given their consent to be filmed. Using tools like <strong>RM Video FaceBlur</strong> is a simple yet effective way to respect their privacy. Our AI makes it easy to blur faces in seconds, allowing you to focus on your storytelling while staying compliant with privacy laws.</p>
      
      <h3>3. Use Secure Collaboration Tools</h3>
      <p>When working with a team on sensitive projects, don't just send files over email. Use a zero-knowledge storage solution like our <strong>Secure Data Vault</strong> to share drafts, contracts, and research. This ensures that even if your email is hacked, your project files remain safe.</p>
      
      <h3>4. Be Transparent with Your Audience</h3>
      <p>Transparency builds trust. Let your audience know what tools you use to protect their data. By showing that you take privacy seriously, you differentiate yourself from the noise and build a more loyal following.</p>
      
      <h3>Conclusion</h3>
      <p>Privacy isn't a hurdle to content creation; it's an essential component of professional work. By integrating the right AI tools into your workflow, you can create high-quality content that respects the rights of others and protects your own reputation. RM Solutions is here to provide the tech you need to succeed in the privacy-first era.</p>
    `
    },
    {
        id: 5,
        title: "The Rise of AI Utilities: From Gimmicks to Essentials",
        date: "January 1, 2024",
        author: "RM Tech Insights",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "AI is moving beyond chatbots. Explore the new wave of AI utility tools that are solving real-world problems in security, linguistics, and automation.",
        content: `
      <p>A year ago, the world was obsessed with generative AI—tools that could write poems or create images. While impressive, many of these were seen as novelties. Today, we are seeing the rise of "AI Utilities"—practical, focused tools that use AI to solve specific, high-value problems. This is the space where RM Solutions operates.</p>
      
      <h3>Moving Beyond Chat</h3>
      <p>While chatbots are useful for general queriesBuf, they often lack the precision needed for specialized tasks. AI Utilities, on the other hand, are designed for one purpose and doing it better than any human or traditional software could. Think about face blurring: a human could do it frame by frame, but it would take hours. A general AI might struggle with precision. An AI utility like <strong>Video FaceBlur</strong> does it automatically and accurately.</p>
      
      <h3>Automation with Intent</h3>
      <p>Utility AI is about "Automation with Intent." It's not just about automating for the sake of it; it's about solving a pain point. For researchers, the pain point is finding and citing relevant data in multiple languages. Our <strong>AI Researcher</strong> solves this by using NLP to handle the linguistic heavy lifting, allowing the researcher to focus on their analysis.</p>
      
      <h3>The Security Imperative</h3>
      <p>As we move more of our lives online, the need for intelligent security tools is paramount. AI can now be used to detect anomalies in data access patterns, suggesting potential breaches before they happen. In our <strong>Secure Vault</strong>, AI plays a role in optimizing data flow and ensuring that encryption doesn't compromise system performance.</p>
      
      <h3>Summary</h3>
      <p>The "wow" factor of AI is evolving into the "useful" factor. We are moving from a phase of experimentation to a phase of implementation. At RM Solutions, we are proud to be leading this charge, building the utilities that will power the next decade of digital productivity.</p>
    `
    }
];

export const BlogPage = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    if (selectedArticle) {
        return (
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <button
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center gap-2 text-primary hover:text-blue-600 font-bold mb-8 transition-colors"
                >
                    <i className="fa-solid fa-arrow-left"></i> Back to Blog
                </button>

                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-96 object-cover rounded-3xl mb-10 shadow-lg" />

                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1"><i className="fa-solid fa-calendar"></i> {selectedArticle.date}</span>
                    <span className="flex items-center gap-1"><i className="fa-solid fa-user"></i> {selectedArticle.author}</span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{selectedArticle.category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">{selectedArticle.title}</h1>

                <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 blog-content"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                <div className="mt-20 p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                    <img src="https://i.ibb.co/5xJZ3cKb/581731373-808034715375321-5235741489036203174-n.jpg" alt="Author" className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                    <div>
                        <h3 className="text-xl font-bold text-dark mb-2">About the Author: {selectedArticle.author}</h3>
                        <p className="text-gray-600 text-sm italic">
                            Risath Manvidu is the founder of RM Solutions and a passionate advocate for privacy-first AI development. He has over 5 years of experience in the tech industry, focusing on NLP and cybersecurity.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">The RM Solutions <span className="text-gradient">Blog</span></h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Insights into AI, privacy, and the future of digital productivity.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.map((article) => (
                    <div
                        key={article.id}
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                        onClick={() => setSelectedArticle(article)}
                    >
                        <div className="relative overflow-hidden h-48 ">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                {article.category}
                            </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                                <i className="fa-solid fa-calendar"></i> {article.date}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                                {article.excerpt}
                            </p>
                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-primary">
                                        RM
                                    </div>
                                    <span className="text-xs font-medium text-gray-600">{article.author}</span>
                                </div>
                                <span className="text-primary text-xs font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    Read More <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 p-12 bg-dark rounded-[40px] text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Get Notified of New Articles</h2>
                    <p className="text-gray-400 mb-10">We publish high-quality research and insights once a week. No spam, just deep tech.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary" />
                        <button className="bg-primary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
