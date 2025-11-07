import PageHeader from '@/components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Privacy Policy"
          description="Last updated: January 2025"
        />
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-foreground/70 leading-relaxed">
                At Colyon, we take your privacy seriously. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you use our services,
                including Monchain and related platforms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>
                  <strong>Account Information:</strong> Email address, username, and account preferences
                </li>
                <li>
                  <strong>Transaction Data:</strong> Anonymized transaction patterns for security analysis
                  (we never access your private keys or wallet contents)
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our services, including features used
                  and time spent
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Provide and improve our AI security services</li>
                <li>Detect and prevent fraudulent transactions and scams</li>
                <li>Analyze patterns to enhance our threat detection algorithms</li>
                <li>Communicate important updates and security alerts</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Non-Custodial Guarantee</h2>
              <p className="text-foreground/70 leading-relaxed">
                Colyon operates on a strictly non-custodial basis. We never have access to, store,
                or can recover your private keys or cryptocurrency assets. Your funds remain entirely
                under your control at all times.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
              <p className="text-foreground/70 leading-relaxed">
                We implement industry-standard security measures to protect your information,
                including encryption, secure servers, and regular security audits. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                We do not sell your personal information. We may share data only in these circumstances:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Cookies and Tracking</h2>
              <p className="text-foreground/70 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage,
                and improve our services. You can control cookie preferences through your browser
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-foreground/70 leading-relaxed">
                Our services are not intended for users under 18 years of age. We do not knowingly
                collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                material changes via email or through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                For questions about this Privacy Policy or to exercise your rights, please contact
                us at privacy@colyon.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
