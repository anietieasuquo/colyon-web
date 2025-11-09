"use client";

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { ChevronDown } from 'lucide-react';

const PrivacyPolicy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'summary', title: 'Summary of Key Points' },
    { id: 'table-of-contents', title: 'Table of Contents' },
    { id: 'personal-information', title: 'What Information Do We Collect?' },
    { id: 'personal-information-processing', title: 'How Do We Process Your Information?' },
    { id: 'legal-basis', title: 'What Legal Basis Do We Have for Processing Your Personal Information?' },
    { id: 'personal-information-sharing', title: 'When And With Whom Do We Share Your Personal Information?' },
    { id: 'cookies', title: 'Do We Use Cookies And Other Tracking Technologies?' },
    { id: 'artificial-intelligence', title: 'Do We Offer Artificial Intelligence Products?' },
    { id: 'personal-information-duration', title: 'How Long Do We Keep Your Information?' },
    { id: 'personal-information-safety', title: 'How Do We Keep Your Information Safe?' },
    { id: 'personal-information-minors', title: 'Do We Collect Information From Minors?' },
    { id: 'privacy-rights', title: 'What Are Your Privacy Rights?' },
    { id: 'do-not-track', title: 'Controls for Do-Not-Track Features' },
    { id: 'us-citizens', title: 'Do United States Citizens Have Specific Privacy Rights?' },
    { id: 'policy-updates', title: 'Do We Make Updates to This Policy?' },
    { id: 'contact-us', title: 'How Can You Contact Us About This Policy?' },
    { id: 'data-update-and-deletion', title: 'How Can You Review, Update, or Delete the Data We Collect From You?' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Privacy Policy"
          description="Last updated: March 25, 2025"
        />

        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-6 max-w-4xl mx-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 flex justify-between items-center text-foreground hover:bg-accent/10 transition-colors"
          >
            <span className="font-medium">Navigate to Section</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMenuOpen && (
            <div className="absolute z-20 left-6 right-6 mt-2 py-2 bg-card border border-border rounded-lg shadow-lg">
              <nav className="flex flex-col">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 text-left text-sm transition-colors ${
                      activeSection === section.id
                        ? 'text-accent bg-accent/10'
                        : 'text-muted-foreground hover:bg-accent/5 hover:text-accent'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
              <h2 className="font-semibold mb-4 text-foreground">Privacy Policy</h2>
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm transition-colors py-1 ${
                      activeSection === section.id
                        ? 'text-accent font-medium'
                        : 'text-muted-foreground hover:text-accent'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-12">
              
              <section id="overview">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  This Privacy Policy for Colyon ("<span className="font-bold">we</span>," "<span className="font-bold">us</span>," or "<span className="font-bold">our</span>"), describes how and why we might access, collect, store, use, and/or share ("<span className="font-bold">process</span>") your personal information when you use our services ("<span className="font-bold">Services</span>"), including when you:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>Visit our website at https://www.colyon.ai, or any website of ours that links to this Privacy Policy</li>
                  <li>Download and use our mobile application (Colyon), or any other application of ours that links to this Privacy Policy</li>
                  <li>Use Colyon. Colyon is a next-generation crypto security platform focused on protecting users through AI-powered fraud detection, secure wallet tools, blockchain security analysis, and smart contract auditing. We help you identify scams and risky behavior before you interact with them.</li>
                  <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed">
                  <span className="font-bold">Questions or concerns?</span> Reading this Privacy Policy will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <span className="font-bold">legal@colyon.ai</span>.
                </p>
              </section>

              <section id="summary">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Summary of Key Points</h2>
                <p className="text-foreground/70 leading-relaxed mb-6 font-bold">
                  This summary provides key points from our Privacy Policy, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#table-of-contents" className="text-accent hover:underline">table of contents</a> below to find the section you are looking for.
                </p>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    <span className="font-bold">What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#personal-information" className="text-accent hover:underline">personal information you disclose to us</a>.
                  </p>
                  <p>
                    <span className="font-bold">Do we process any sensitive personal information?</span> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about <a href="#personal-information" className="text-accent hover:underline">sensitive information we process</a>.
                  </p>
                  <p>
                    <span className="font-bold">Do we collect any information from third parties?</span> We do not collect any information from third parties.
                  </p>
                  <p>
                    <span className="font-bold">How do we process your information?</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#personal-information-processing" className="text-accent hover:underline">how we process your information</a>.
                  </p>
                  <p>
                    <span className="font-bold">In what situations and with which parties do we share personal information?</span> We may share information in specific situations and with specific third parties. Learn more about <a href="#personal-information-sharing" className="text-accent hover:underline">when and with whom we share your personal information</a>.
                  </p>
                  <p>
                    <span className="font-bold">How do we keep your information safe?</span> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#personal-information-safety" className="text-accent hover:underline">how we keep your information safe</a>.
                  </p>
                  <p>
                    <span className="font-bold">What are your rights?</span> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacy-rights" className="text-accent hover:underline">your privacy rights</a>.
                  </p>
                  <p>
                    <span className="font-bold">How do you exercise your rights?</span> The easiest way to exercise your rights is by visiting <a href="https://www.colyon.ai/contact" className="text-accent hover:underline">https://www.colyon.ai/contact</a> or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                  </p>
                  <p>
                    Want to learn more about what we do with any information we collect? <a href="#table-of-contents" className="text-accent hover:underline">Review the Privacy Policy in full</a>.
                  </p>
                </div>
              </section>

              <section id="table-of-contents">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Table of Contents</h2>
                <ol className="text-accent list-decimal list-inside space-y-2">
                  {sections.slice(3).map((section) => (
                    <li key={section.id}>
                      <button onClick={() => scrollToSection(section.id)} className="hover:underline">
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="personal-information">
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. What Information Do We Collect?</h2>
                
                <h4 className="text-lg font-semibold mb-3 text-foreground">Personal Information You Disclose to Us</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We collect personal information that you provide to us.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  <span className="font-bold">Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>names</li>
                  <li>phone numbers</li>
                  <li>email addresses</li>
                  <li>passwords</li>
                  <li>contact or authentication data</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  <span className="font-bold">Sensitive Information.</span> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>financial data</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  <span className="font-bold">Application Data.</span> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>
                    <i>Mobile Device Data.</i> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.
                  </li>
                  <li>
                    <i>Push Notifications.</i> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                  </li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Information Automatically Collected</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  The information we collect includes:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>
                    <i>Log and Usage Data.</i> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                  </li>
                  <li>
                    <i>Device Data.</i> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                  </li>
                  <li>
                    <i>Location Data.</i> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Google API</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Limited Use requirements</a>.
                </p>
              </section>

              <section id="personal-information-processing">
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. How Do We Process Your Information?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  <span className="font-bold">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</span>
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-bold">To facilitate account creation and authentication and otherwise manage user accounts.</span> We may process your information so you can create and log in to your account, as well as keep your account in working order.
                  </li>
                  <li>
                    <span className="font-bold">To deliver and facilitate delivery of services to the user.</span> We may process your information to provide you with the requested service.
                  </li>
                  <li>
                    <span className="font-bold">To respond to user inquiries/offer support to users.</span> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                  </li>
                  <li>
                    <span className="font-bold">To send administrative information to you.</span> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                  </li>
                  <li>
                    <span className="font-bold">To fulfill and manage your orders.</span> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.
                  </li>
                  <li>
                    <span className="font-bold">To save or protect an individual's vital interest.</span> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.
                  </li>
                  <li>
                    <span className="font-bold">Compliance.</span> KYC for Cryptocurrency Platforms.
                  </li>
                </ul>
              </section>

              <section id="legal-basis">
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. What Legal Basis Do We Have for Processing Your Personal Information?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-3 ml-4">
                  <li>
                    <span className="font-bold">Consent.</span> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.
                  </li>
                  <li>
                    <span className="font-bold">Performance of a Contract.</span> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
                  </li>
                  <li>
                    <span className="font-bold">Legitimate Interests.</span> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
                      <li>Diagnose problems and/or prevent fraudulent activities</li>
                      <li>Understand how our users use our products and services so we can improve user experience</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">Legal Obligations.</span> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                  </li>
                  <li>
                    <span className="font-bold">Vital Interests.</span> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                  </li>
                </ul>
              </section>

              <section id="personal-information-sharing">
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. When And With Whom Do We Share Your Personal Information?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We may share information in specific situations described in this section and/or with the following third parties.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may need to share your personal information in the following situations:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-bold">Business Transfers.</span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                  </li>
                </ul>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Do We Use Cookies And Other Tracking Technologies?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We may use cookies and other tracking technologies to collect and store your information.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "<a href="#us-citizens" className="text-accent hover:underline">Do United States Citizens Have Specific Privacy Rights?</a>"
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Google Analytics</h4>
                <p className="text-foreground/70 leading-relaxed">
                  We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Google Display Network Impressions Reporting and Google Analytics Demographics and Interests Reporting. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://tools.google.com/dlpage/gaoptout</a>. You can opt out of Google Analytics Advertising Features through <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ads Settings</a> and Ad Settings for mobile apps. Other opt out means include <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://optout.networkadvertising.org/</a> and <a href="http://www.networkadvertising.org/mobile-choice" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://www.networkadvertising.org/mobile-choice</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Privacy & Terms page</a>.
                </p>
              </section>

              <section id="artificial-intelligence">
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Do We Offer Artificial Intelligence Products?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
                </p>
                
                <h4 className="text-base font-semibold mb-3 text-foreground">Use of AI Technologies</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We provide the AI Products through third-party service providers ("AI Service Providers"), including Amazon Web Services (AWS) AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "<a href="#legal-basis" className="text-accent hover:underline">What Legal Basis Do We Have for Processing Your Personal Information?</a>" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
                </p>
                
                <h4 className="text-base font-semibold mb-3 text-foreground">Our AI Products</h4>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Our AI Products are designed for the following functions:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>AI applications</li>
                  <li>AI automation</li>
                  <li>AI insights</li>
                  <li>AI predictive analytics</li>
                  <li>Blockchain security analysis</li>
                  <li>Machine learning models for fraud detection</li>
                </ul>
                
                <h4 className="text-base font-semibold mb-3 text-foreground">How We Process Your Data Using AI</h4>
                <p className="text-foreground/70 leading-relaxed">
                  All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
                </p>
              </section>

              <section id="personal-information-duration">
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. How Long Do We Keep Your Information?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </p>
              </section>

              <section id="personal-information-safety">
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. How Do We Keep Your Information Safe?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We aim to protect your personal information through a system of organizational and technical security measures.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                </p>
              </section>

              <section id="personal-information-minors">
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Do We Collect Information From Minors?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> We do not knowingly collect data from or market to children under 18 years of age.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at legal@colyon.ai.
                </p>
              </section>

              <section id="privacy-rights">
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. What Are Your Privacy Rights?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "<a href="#contact-us" className="text-accent hover:underline">How Can You Contact Us About This Policy?</a>" below.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UK data protection authority</a>.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Federal Data Protection and Information Commissioner</a>.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <span className="font-bold"><u>Withdrawing your consent:</u></span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#contact-us" className="text-accent hover:underline">How Can You Contact Us About This Policy?</a>" below.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Account Information</h4>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  If you would at any time like to review or change the information in your account or terminate your account, you can:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>Log in to your account settings and update your user account.</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <span className="font-bold"><u>Cookies and similar technologies:</u></span> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  If you have questions or comments about your privacy rights, you may email us at legal@colyon.ai.
                </p>
              </section>

              <section id="do-not-track">
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Controls for Do-Not-Track Features</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.
                </p>
              </section>

              <section id="us-citizens">
                <h2 className="text-2xl font-bold mb-4 text-foreground">12. Do United States Citizens Have Specific Privacy Rights?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</i>
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-foreground">Categories of Personal Information We Collect</h4>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We have collected the following categories of personal information in the past twelve (12) months:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm text-foreground/70 border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border px-4 py-2 text-left">Category</th>
                        <th className="border border-border px-4 py-2 text-left">Examples</th>
                        <th className="border border-border px-4 py-2 text-left">Collected</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2">A. Identifiers</td>
                        <td className="border border-border px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                        <td className="border border-border px-4 py-2">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">B. Personal information as defined in the California Customer Records statute</td>
                        <td className="border border-border px-4 py-2">Name, contact information, education, employment, employment history, and financial information</td>
                        <td className="border border-border px-4 py-2">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">L. Sensitive personal Information</td>
                        <td className="border border-border px-4 py-2">Account login information</td>
                        <td className="border border-border px-4 py-2">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Your Rights</h4>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Depending upon the state where you live, you may have the following rights:
                </p>
                <ul className="text-foreground/70 leading-relaxed list-disc list-inside space-y-2 ml-4 mb-6">
                  <li><span className="font-bold">Right to know</span> whether or not we are processing your personal data</li>
                  <li><span className="font-bold">Right to access</span> your personal data</li>
                  <li><span className="font-bold">Right to correct</span> inaccuracies in your personal data</li>
                  <li><span className="font-bold">Right to request</span> the deletion of your personal data</li>
                  <li><span className="font-bold">Right to obtain a copy</span> of the personal data you previously shared with us</li>
                  <li><span className="font-bold">Right to non-discrimination</span> for exercising your rights</li>
                  <li><span className="font-bold">Right to opt out</span> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects</li>
                </ul>

                <h4 className="text-lg font-semibold mb-3 text-foreground">How to Exercise Your Rights</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  To exercise these rights, you can contact us by visiting <a href="https://www.colyon.ai/contact" className="text-accent hover:underline">https://www.colyon.ai/contact</a>, by emailing us at legal@colyon.ai, or by referring to the contact details at the bottom of this document.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Request Verification</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">Appeals</h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at legal@colyon.ai. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-foreground">California "Shine The Light" Law</h4>
                <p className="text-foreground/70 leading-relaxed">
                  California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "<a href="#contact-us" className="text-accent hover:underline">How Can You Contact Us About This Policy?</a>"
                </p>
              </section>

              <section id="policy-updates">
                <h2 className="text-2xl font-bold mb-4 text-foreground">13. Do We Make Updates to This Policy?</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  <i><span className="font-bold">In Short:</span> Yes, we will update this notice as necessary to stay compliant with relevant laws.</i>
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                </p>
              </section>

              <section id="contact-us">
                <h2 className="text-2xl font-bold mb-4 text-foreground">14. How Can You Contact Us About This Policy?</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you have questions or comments about this notice, you may email us at legal@colyon.ai or contact us through our <a href="/contact" className="text-accent hover:underline">contact page</a>.
                </p>
              </section>

              <section id="data-update-and-deletion">
                <h2 className="text-2xl font-bold mb-4 text-foreground">15. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="https://www.colyon.ai/contact" className="text-accent hover:underline">https://www.colyon.ai/contact</a>.
                </p>
              </section>

            </div>
          </main>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
