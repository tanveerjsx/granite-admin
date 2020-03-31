import API from "./../lib/Api";

export async function login(email, password) {
  return API.post("/users/login", { email, password });
}
