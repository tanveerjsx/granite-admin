import API from "../lib/Api";

export async function getVendor() {
  return API.get("/users?vendor=true");
}
export async function getUser() {
  return API.get("/users?user=true");
}
export async function deleteUser(_id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.delete(`/users/${_id}`, { headers });
}
export async function getRoles(token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.get(`/roles`, { headers });
}

export async function activateVendor(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.get(`/users/activate/${id}`, { headers });
}
