import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { IS_GOOGLE_SSO_ENABLED } from '@documenso/lib/constants/auth';
import { decryptSecondaryData } from '@documenso/lib/server-only/crypto/decrypt';

import { SignInForm } from '~/components/forms/signin';

export const metadata: Metadata = {
  title: 'Sign In',
};

type SignInPageProps = {
  searchParams: {
    email?: string;
  };
};

export default function SignInPage({ searchParams }: SignInPageProps) {
  const rawEmail = typeof searchParams.email === 'string' ? searchParams.email : undefined;
  const email = rawEmail ? decryptSecondaryData(rawEmail) : null;

  if (!email && rawEmail) {
    redirect('/signin');
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold">Sign in to your account</h1>

      <p className="text-muted-foreground/60 mt-2 text-sm">
        Welcome back, we are lucky to have you.
      </p>

      <SignInForm
        className="mt-4"
        initialEmail={email || undefined}
        isGoogleSSOEnabled={IS_GOOGLE_SSO_ENABLED}
      />

      <p className="mt-2.5 text-center">
        <Link
          href="/forgot-password"
          className="text-muted-foreground text-sm duration-200 hover:opacity-70"
        >
          Forgot your password?
        </Link>
      </p>
    </div>
  );
}
