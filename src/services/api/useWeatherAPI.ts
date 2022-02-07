import axios from "axios";
import { ILocation } from "../../redux/weather/types";

// MINIMALISM: using static location
const woeid = '44418'
// MINIMALIZM: using const BASEURL instead of env
const BASEURL = 'https://www.metaweather.com/api/location/'


export const weatherApi = (data: ILocation) => weatherGetter()

const weatherGetter = async () => {
	return await axios.get(`${BASEURL}${woeid}`);
}