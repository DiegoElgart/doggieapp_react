/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import { apiUrl } from "../config.json";

export function getVisits(parkId) {
  return http.get(`${apiUrl}/visit/groupbyhour/${parkId}`);
}

export function addVisit(visit) {
  return http.post(`${apiUrl}/visit/add`, visit);
}
export default {
  getVisits,
  addVisit,
};
