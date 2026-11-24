import * as fs from 'node:fs';
import * as path from 'node:path';

// This program generates the official office joke entry for the make.fun competition.
// The premise works because everyone dreads optional Friday meetings as weekend traps.
const joke = 'Accepting an optional 8 AM Friday meeting is a signed confession that you have weekend availability and no will to live.';

// This safety check ensures the joke strictly adheres to the 200-character bounty limit.
if (joke.length < 1 || joke.length > 200) {
  console.error('Validation failed: Entry exceeds the maximum allowed 200-character limit.');
  // Keeping payload within bounds prevents automatic disqualification at the validation gateway.
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), joke, 'utf8');
