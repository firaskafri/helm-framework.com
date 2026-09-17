import records from './updates.json';
import { FRAMEWORK_VERSION, FRAMEWORK_RELEASE_STATE } from './framework';
import { SITE_UPDATED_AT } from './site';
import {
  latestUpdateDate,
  publicUpdates,
  validateUpdates,
} from '../lib/updates';

export const UPDATES = validateUpdates(
  records,
  FRAMEWORK_VERSION,
  FRAMEWORK_RELEASE_STATE,
);
export const PUBLIC_UPDATES = publicUpdates(UPDATES);
export const UPDATES_LAST_MODIFIED =
  latestUpdateDate(PUBLIC_UPDATES) || SITE_UPDATED_AT;
