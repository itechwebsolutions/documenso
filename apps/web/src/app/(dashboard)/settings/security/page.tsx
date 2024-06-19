import type { Metadata } from 'next';
import Link from 'next/link';

import { IDENTITY_PROVIDER_NAME } from '@documenso/lib/constants/auth';
import { getRequiredServerComponentSession } from '@documenso/lib/next-auth/get-server-component-session';
import { Alert, AlertDescription, AlertTitle } from '@documenso/ui/primitives/alert';
import { Button } from '@documenso/ui/primitives/button';

import { SettingsHeader } from '~/components/(dashboard)/settings/layout/header';
import { PasswordForm } from '~/components/forms/password';

export const metadata: Metadata = {
  title: 'אבטחה',
};

export default async function SecuritySettingsPage() {
  const { user } = await getRequiredServerComponentSession();

  return (
    <div>
      <SettingsHeader
        title="אבטחה"
        subtitle="כאן תוכל לשלנות ולערוך את הסיסמא, והגדרות אבטחה נוספות לחשבון המשתמש שלך"
      />

      {user.identityProvider === 'DOCUMENSO' ? (
        <div>
          <PasswordForm user={user} />

          <hr className="border-border/50 mt-6" />
        </div>
      ) : (
        <Alert className="p-6" variant="neutral">
          <AlertTitle>
            Your account is managed by {IDENTITY_PROVIDER_NAME[user.identityProvider]}
          </AlertTitle>

          <AlertDescription>
            To update your password, enable two-factor authentication, and manage other security
            settings, please go to your {IDENTITY_PROVIDER_NAME[user.identityProvider]} account
            settings.
          </AlertDescription>
        </Alert>
      )}

      <Alert
        className="mt-6 flex flex-col justify-between p-6 sm:flex-row sm:items-center"
        variant="neutral"
      >
        <div className="mb-4 mr-4 sm:mb-0">
          <AlertTitle>פעילות אחרונה</AlertTitle>

          <AlertDescription className="mr-2">
            צפה בכל הפעילות האחרונה שהתבצעה בחשבונך.
          </AlertDescription>
        </div>

        <Button asChild>
          <Link href="/settings/security/activity">צפה</Link>
        </Button>
      </Alert>
    </div>
  );
}
