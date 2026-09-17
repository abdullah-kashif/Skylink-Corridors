export const MAX_CV_BYTES = 3 * 1024 * 1024;
export const EXPERIENCE_OPTIONS = ['Less than 1 year', '1–3 years', '3–5 years', '5+ years'];

// Use an explicit timezone on every deadline; invalid or incomplete entries stay closed.
export function isOpenJob(job, now = Date.now()) {
  if (!job || job.status !== 'open' || !/^[a-z0-9-]+$/.test(job.id || '')) return false;
  if (!['title', 'department', 'location', 'type', 'description'].every(key => typeof job[key] === 'string' && job[key].trim())) return false;
  if (!['responsibilities', 'requirements'].every(key => Array.isArray(job[key]) && job[key].length && job[key].every(item => typeof item === 'string' && item.trim()))) return false;
  const timestamp = value => typeof value === 'string' && /T.*(?:Z|[+-]\d{2}:\d{2})$/.test(value) ? Date.parse(value) : NaN;
  const closes = timestamp(job.closesAt);
  const opens = job.opensAt ? timestamp(job.opensAt) : -Infinity;
  return Number.isFinite(closes) && !Number.isNaN(opens) && opens <= now && now < closes;
}

export function getOpenJobs(jobs, now = Date.now()) {
  if (!Array.isArray(jobs)) throw new Error('Invalid jobs data');
  const ids = new Set();
  return jobs.filter(job => {
    if (!isOpenJob(job, now) || ids.has(job.id)) return false;
    ids.add(job.id);
    return true;
  });
}
