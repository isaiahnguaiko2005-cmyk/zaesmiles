export const PROJECT_START = new Date("2026-06-30T00:00:00");
export const PROJECT_TOTAL_DAYS = 183;

export function getProjectDay(): number {
  const now = new Date();
  const diff =
    Math.floor((now.getTime() - PROJECT_START.getTime()) / 86400000) + 1;
  return Math.min(Math.max(diff, 1), PROJECT_TOTAL_DAYS);
}
