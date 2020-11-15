/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import { apiUrl } from "../config.json";

export function getAllParks() {
  return http.get(`${apiUrl}/park/list`);
}

export function getAllVisitsForPark(id) {
  return http.get(`${apiUrl}/visit/all/${id}`);
}
export default {
  getAllParks,
  getAllVisitsForPark,
};
