import type { z } from "zod";
import type { image } from "../schema";

export type Image = z.infer<typeof image>;
