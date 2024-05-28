import { Context } from "hono";
import { ObjectType } from "../types";
import { StatusCode } from "hono/utils/http-status";

export function returnResponse({ context, message, data = null, error = null, status }: {
	message: string;
	context: Context;
	data?: ObjectType | null;
	error?: any;
	status?: StatusCode;
}) {
	return context.json({ message, data, error }, status || error?.status || 500);
}