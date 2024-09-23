import { Zodios } from "@zodios/core"
import { searchImages } from "./images/search"

const baseUrl = "https://api.thecatapi.com/v1"
export const apiClient = new Zodios(baseUrl, [searchImages])
