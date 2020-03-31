import API from "./../lib/Api";

export async function categories() {
  return API.get("/category");
}

export async function deleteCategory(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.delete(`/category/${id}`, { headers });
}

export async function addCategory(category, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.post("/category", category, { headers });
}
export async function updateCategory(_id, category, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.patch(`/category/${_id}`, category, { headers });
}
