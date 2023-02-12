export const isAvailable = ({
  deleted_at,
  restored_at,
}: {
  deleted_at?: string | Date;
  restored_at?: string | Date;
}): boolean => {
  if (!deleted_at) return true;
  if (deleted_at && !restored_at) return false;

  if (typeof deleted_at === 'string') deleted_at = new Date(deleted_at);
  if (typeof restored_at === 'string') restored_at = new Date(restored_at);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (deleted_at >= restored_at!) return false;
  else return true;
};
