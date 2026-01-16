import { error } from '@sveltejs/kit';
import writeups from '../../../data/writeups.json';

export function load({ params }) {
  const writeup = writeups.find(w => w.slug === params.slug);

  if (!writeup) {
    throw error(404, 'Writeup not found');
  }

  return {
    writeup
  };
}
