import { z } from "zod";

export const image = z.object({
	id: z.string(),
	url: z.string(),
	width: z.number(),
	height: z.number(),
});

export const images = z.array(image);
