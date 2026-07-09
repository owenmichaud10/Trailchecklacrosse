import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} contact and recruiting consultation services.`,
};

export default function PrivacyPage() {
  return (
    <section className="bg-surface px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Legal
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: July 9, 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
          <p>
            {siteConfig.name} (&quot;TrailCheck,&quot; &quot;we,&quot;
            &quot;us&quot;) respects your privacy. This policy explains how we
            collect and use information when you visit our website or submit our
            contact form.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-navy">
              Information we collect
            </h2>
            <p className="mt-3">
              When you submit our contact form, we may collect athlete and
              family information including names, email address, phone number,
              graduation year, high school, club team, position, and your
              message.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">
              How we use your information
            </h2>
            <p className="mt-3">
              We use this information solely to respond to your inquiry,
              provide recruiting guidance, and communicate about TrailCheck
              services. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">
              Third-party services
            </h2>
            <p className="mt-3">
              Form submissions are processed through a secure email delivery
              service (Formspree) so we can receive and respond to your message.
              That provider processes data according to its own privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">Data retention</h2>
            <p className="mt-3">
              We retain contact form submissions only as long as needed to
              respond to your inquiry and provide ongoing recruiting support if
              you choose to work with TrailCheck.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">Your rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your
              personal information by contacting us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-navy underline decoration-gold/50 underline-offset-2 hover:text-gold"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-navy underline decoration-gold/50 underline-offset-2 hover:text-gold"
              >
                {siteConfig.email}
              </a>{" "}
              or call {siteConfig.phone}.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
