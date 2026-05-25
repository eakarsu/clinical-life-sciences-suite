import { ensureListSeed, listPgPayloads, replacePgPayloads } from '@/lib/postgres';

export type NotificationItem = {
  id: string;
  title: string;
  detail: string;
  read: boolean;
};

const seed: NotificationItem[] = [
  { id: 'note-1', title: 'SAE report due today', detail: 'Six expedited safety reports need medical review.', read: false },
  { id: 'note-2', title: 'Enrollment pacing alert', detail: 'Nine studies are behind planned recruitment targets.', read: false },
  { id: 'note-3', title: 'IRB packet updated', detail: 'Regulatory response bundle was refreshed.', read: true },
];

async function ensureStore() {
  await ensureListSeed('notifications', seed, 'notifications.json');
}

export async function getNotifications(): Promise<NotificationItem[]> {
  await ensureStore();
  return listPgPayloads<NotificationItem>('notifications');
}

export async function saveNotifications(items: NotificationItem[]) {
  await ensureStore();
  await replacePgPayloads('notifications', items);
}
