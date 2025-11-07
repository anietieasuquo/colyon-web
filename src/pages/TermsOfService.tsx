const TermsOfService = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-foreground/60 mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                By accessing or using Colyon's services, including Monchain and any related platforms,
                you agree to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Colyon provides AI-powered security solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Multi-agent AI systems for real-time transaction analysis</li>
                <li>Scam detection and prevention tools</li>
                <li>Explainable AI security recommendations</li>
                <li>Non-custodial cryptocurrency wallet solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Non-Custodial Services</h2>
              <p className="text-foreground/70 leading-relaxed">
                Monchain is a non-custodial wallet solution. We do not have access to, nor do we store,
                your private keys. You are solely responsible for maintaining the security of your
                private keys and cryptocurrency assets.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-foreground/70 leading-relaxed">
                While our AI systems provide security analysis and recommendations, no system can
                guarantee 100% protection against all threats. Colyon shall not be liable for any
                losses resulting from cryptocurrency transactions, scams, or security breaches,
                regardless of whether our services were used.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-foreground/70 leading-relaxed">
                All content, features, and functionality of Colyon's services are owned by Colyon
                and are protected by international copyright, trademark, and other intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Modifications to Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of
                any material changes via email or through our platform. Continued use of our
                services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-foreground/70 leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@colyon.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
