/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import { apiUrl } from "../config.json";

export function createDog(dog) {
  return http.post(`${apiUrl}/user/dog/add`, dog);
}
export function getDog(id) {
  return http.get(`${apiUrl}/my-dog`, id);
}

export function deleteDog(dogId) {
  return http.delete(`${apiUrl}/my-dog/delete/${dogId}`);
}

export function editDog(dog) {
  return http.put(`${apiUrl}/my-dog/edit/${dog.dogId}`, dog);
}
export function getDogById(id) {
  return http.get(`${apiUrl}/my-dog/${id}`);
}

export function getAllDogs() {
  return http.get(`${apiUrl}/dog/all`);
}
export default {
  createDog,
  getDog,
  deleteDog,
  editDog,
  getDogById,
  getAllDogs,
};
