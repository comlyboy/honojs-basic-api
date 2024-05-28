import { Hono } from "hono"

const authController = new Hono()

authController.post('login', (context) => {




	return context.json({})
})
authController.post('register', (c) => c.json('create an author', 201))

export { authController };