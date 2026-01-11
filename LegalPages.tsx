import React from 'react';

const Container = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-dark">{title}</h1>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            {children}
        </div>
    </div>
);

export const PrivacyPolicy = () => (
    <Container title="Privacy Policy">
        <p className="font-semibold text-gray-900">Effective Date: January 1, 2024</p>
        <p>
            At RM Solutions (CompanyRM), accessible from www.companyrm.lk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by RM Solutions and how we use it.
        </p>
        <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in RM Solutions. This policy is not applicable to any information collected offline or via channels other than this website.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">Information we collect</h2>
        <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>
        <p>
            When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number. This is necessary for providing our AI services, including Face Blur technology, Secure Vault encryption, and bilingual research tools.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">How we use your information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website and AI tools.</li>
            <li>Improve, personalize, and expand our services, specifically our Sinhala NLP capabilities.</li>
            <li>Understand and analyze how you use our website to better serve the Sri Lankan market.</li>
            <li>Develop new products, features, and functionality like automated exam generation.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Send you emails regarding security updates for the Secure Vault.</li>
            <li>Find and prevent fraud and ensure GDPR compliance for all data processing tasks.</li>
        </ul>

        <h2 className="text-2xl font-bold text-dark mt-10">Log Files</h2>
        <p>
            RM Solutions follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">Cookies and Web Beacons</h2>
        <p>
            Like any other website, RM Solutions uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. For more detail, please refer to our Cookie Policy.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">Google DoubleClick DART Cookie</h2>
        <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">Our Advertising Partners</h2>
        <p>
            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <ul className="list-disc pl-6">
            <li>
                Google: <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
            </li>
        </ul>

        <h2 className="text-2xl font-bold text-dark mt-10">Advertising Partners Privacy Policies</h2>
        <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of RM Solutions.
        </p>
        <p>
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on RM Solutions, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
        </p>
        <p>
            Note that RM Solutions has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">Third Party Privacy Policies</h2>
        <p>
            RM Solutions's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>
        <p>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
        </ul>
        <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">GDPR Data Protection Rights</h2>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">Children's Information</h2>
        <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p>
            RM Solutions does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Contacting Us</h3>
            <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
            <p className="mt-2">Website: www.companyrm.lk</p>
            <p>Email: privacy@companyrm.lk</p>
            <p>Founder: Risath Manvidu</p>
        </div>
    </Container>
);

export const TermsOfService = () => (
    <Container title="Terms of Service">
        <p className="font-semibold text-gray-900">Last updated: January 1, 2024</p>
        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the www.companyrm.lk website (the "Service") operated by RM Solutions ("us", "we", or "our").</p>

        <h2 className="text-2xl font-bold text-dark mt-10">1. Acceptance of Terms</h2>
        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. These terms apply to all visitors, users and others who access or use the Service.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">2. Description of Service</h2>
        <p>
            RM Solutions provides specialized AI-driven tools including RM Video FaceBlur, Secure Data Vault, Student AI Assistant, and AI Research tools for Sinhala and English. Our services are subject to continuous improvement and modification. We reserve the right to withdraw or amend our Service, and any service or material we provide on the website, in our sole discretion without notice.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">3. Accounts</h2>
        <p>
            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">4. Intellectual Property</h2>
        <p>
            The Service and its original content, features and functionality are and will remain the exclusive property of RM Solutions and its licensors. The Service is protected by copyright, trademark, and other laws of both Sri Lanka and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Risath Manvidu and RM Solutions.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">5. User Feedback and AI Training</h2>
        <p>
            By using our AI tools (Face Blur, Researcher, etc.), you may provide feedback or data that helps improve our models. While we respect your ownership of your data as outlined in our Privacy Policy, you grant RM Solutions a non-exclusive, worldwide, royalty-free license to use anonymized feedback to improve our AI technology.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">6. Links To Other Web Sites</h2>
        <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by RM Solutions. RM Solutions has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that RM Solutions shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">7. Termination</h2>
        <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">8. Indemnification</h2>
        <p>
            You agree to defend, indemnify and hold harmless RM Solutions and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">9. Limitation Of Liability</h2>
        <p>
            In no event shall RM Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">10. Disclaimer</h2>
        <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </p>
        <p>
            RM Solutions does not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">11. Governing Law</h2>
        <p>
            These Terms shall be governed and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </p>

        <h2 className="text-2xl font-bold text-dark mt-10">12. Changes</h2>
        <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
    </Container>
);

export const CookiePolicy = () => (
    <Container title="Cookie Policy">
        <p className="font-semibold text-gray-900">Effective Date: January 1, 2024</p>
        <p>This Cookie policy explains how RM Solutions ("we," "us," or "our") uses cookies and similar technologies on our website at www.companyrm.lk.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">What are cookies?</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">Why do we use cookies?</h2>
        <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">Types of Cookies we use</h2>

        <h3 className="text-xl font-bold text-dark mt-6">Essential Cookies</h3>
        <p>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.</p>

        <h3 className="text-xl font-bold text-dark mt-6">Performance and Functionality Cookies</h3>
        <p>These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>

        <h3 className="text-xl font-bold text-dark mt-6">Analytics and Customization Cookies</h3>
        <p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you. We use tools like Google Analytics for this purpose.</p>

        <h3 className="text-xl font-bold text-dark mt-6">Advertising Cookies</h3>
        <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">How can I control cookies?</h2>
        <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager or by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>

        <h2 className="text-2xl font-bold text-dark mt-10">Changes to this Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Questions?</h3>
            <p>If you have any questions about our use of cookies or other technologies, please contact us at cookies@companyrm.lk.</p>
        </div>
    </Container>
);
