import { API_KEY } from "./KEY";
export const TRANSLATE_VALUE = 200;
export const DATA_API_LINK = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`