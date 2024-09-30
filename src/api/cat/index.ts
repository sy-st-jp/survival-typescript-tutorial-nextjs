import { Zodios } from "@zodios/core";
import { searchImages } from "./images/search";

const BASE_URL = "https://api.thecatapi.com/v1";
export const apiClient = new Zodios(BASE_URL, [searchImages]);
