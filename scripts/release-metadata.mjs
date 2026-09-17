import { appendFileSync } from 'node:fs';
import {
  FRAMEWORK_RELEASE_STATE,
  FRAMEWORK_VERSION,
} from '../src/data/framework.ts';

const output = `state=${FRAMEWORK_RELEASE_STATE}\nversion=${FRAMEWORK_VERSION}\n`;
if (process.env.GITHUB_OUTPUT)
  appendFileSync(process.env.GITHUB_OUTPUT, output);
else console.log(output.trim());
