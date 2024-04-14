import { RecipientRole } from '@documenso/prisma/client';

export const RECIPIENT_ROLES_DESCRIPTION = {
  [RecipientRole.APPROVER]: {
    actionVerb: 'לאישור',
    actioned: 'Approved',
    progressiveVerb: 'Approving',
    roleName: 'Approver',
  },
  [RecipientRole.CC]: {
    actionVerb: 'שלח העתק',
    actioned: `CC'd`,
    progressiveVerb: 'CC',
    roleName: 'Cc',
  },
  [RecipientRole.SIGNER]: {
    actionVerb: 'לחתום',
    actioned: 'Signed',
    progressiveVerb: 'לחתימה',
    roleName: 'Signer',
  },
  [RecipientRole.VIEWER]: {
    actionVerb: 'לצפיה',
    actioned: 'Viewed',
    progressiveVerb: 'Viewing',
    roleName: 'Viewer',
  },
} satisfies Record<keyof typeof RecipientRole, unknown>;

export const RECIPIENT_ROLE_TO_EMAIL_TYPE = {
  [RecipientRole.SIGNER]: 'SIGNING_REQUEST',
  [RecipientRole.VIEWER]: 'VIEW_REQUEST',
  [RecipientRole.APPROVER]: 'APPROVE_REQUEST',
} as const;
