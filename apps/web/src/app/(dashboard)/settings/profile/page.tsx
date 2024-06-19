import type { Metadata } from 'next';

import { getRequiredServerComponentSession } from '@documenso/lib/next-auth/get-server-component-session';

import { SettingsHeader } from '~/components/(dashboard)/settings/layout/header';
import { ProfileForm } from '~/components/forms/profile';

export const metadata: Metadata = {
  title: 'פרופיל משתמש',
};

export default async function ProfileSettingsPage() {
  const { user } = await getRequiredServerComponentSession();

  return (
    <div>
      <SettingsHeader title="פרופיל משתמש" subtitle="כאן תוכל לערוך את הפרטים האישיים שלך" />

      <ProfileForm user={user} className="max-w-xl" />
    </div>
  );
}
