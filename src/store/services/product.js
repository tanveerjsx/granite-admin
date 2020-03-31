import API from "./../lib/Api";

export async function products() {
  return API.get("/products");
}
export async function getMyProducts(user) {
  return API.get(`/products/${user}`);
}

export async function addView(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.get(`/products/view/${id}`, { headers });
}

export async function addToStore(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.get(`/products/store/${id}`, { headers });
}

export async function deleteProduct(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.delete(`/products/${id}`, { headers });
}

export async function addProduct(product, token) {
  let headers = {
    "content-type": "multipart/form-data",
    Authorization: `Bearer ${token}`
  };
  return API.post("/products", product, { headers });
}
export async function updateProduct(_id, product, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.patch(`/products/${_id}`, product, { headers });
}
