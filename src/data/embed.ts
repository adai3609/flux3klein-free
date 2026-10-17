/**
 * Embedded generator configuration.
 *
 * Verified 2026-10-17: this is Black Forest Labs' official FLUX 3 Klein Space
 * (https://huggingface.co/spaces/black-forest-labs/flux-3-image-klein).
 * Iframes must use the *.hf.space direct subdomain — the huggingface.co page
 * URL sends X-Frame-Options and cannot be framed. If the demo ever breaks,
 * check the Space status on the model page and swap the URL below.
 */
export const embedConfig = {
  spaceUrl: 'https://black-forest-labs-flux-3-image-klein.hf.space',
  modelPageUrl: 'https://huggingface.co/black-forest-labs/flux-3-image-klein',
  height: 720,
} as const;
