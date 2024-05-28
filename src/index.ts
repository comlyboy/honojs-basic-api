import { serve } from '@hono/node-server';

import { application } from './app';

serve({ port: 3500, fetch: application.fetch });
console.log(`Server running on http://localhost:3500/api`);
