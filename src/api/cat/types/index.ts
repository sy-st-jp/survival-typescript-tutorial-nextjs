import { z } from "zod"
import { image } from "../schema"

export type Image = z.infer<typeof image>
