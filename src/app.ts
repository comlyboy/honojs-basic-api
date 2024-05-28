import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';

import { authController, userController } from './controller';
import { RegisterUserValidation } from './validator/auth.validator';
import { returnResponse } from './helper';


const application = new Hono({ strict: false }).basePath('/api');

application.use(cors());
application.use(logger());

application.route('auth', authController);
application.route('user', userController);

application.get('health', RegisterUserValidation(), async (context, next) => {
	context.req.valid("json");
	return context.json({
		message: 'API working OKAY!!!',
		data: {
			timestamp: new Date().toISOString()
		}
	});
});

application.onError((error, context) => {
	return returnResponse({ context, message: error.message, error });
});
showRoutes(application);
export { application };