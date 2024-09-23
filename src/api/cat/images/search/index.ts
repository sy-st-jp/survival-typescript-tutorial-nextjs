import { makeEndpoint } from "@zodios/core"
import { images } from "../../schema"

export const searchImages = makeEndpoint({
  method: "get",
  path: "/images/search",
  alias: "search",
  response: images,
})
