import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export function RegisterUserValidation() {
	return zValidator('json', z.object({
		username: z.string(),
		password: z.string()
	})
	);
}