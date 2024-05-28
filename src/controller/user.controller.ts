import { Hono } from "hono"

const userController = new Hono()

userController.post('profile', (context) => {




	return context.json({})
})
userController.post('update', (c) => c.json('create an author', 201))

export { userController };