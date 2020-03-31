import API from "./../lib/Api";

export async function orders() {
  return API.get("/order");
}
export async function myOrders(user) {
  return API.get(`/order/${user}`);
}

export async function deleteOrder(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.delete(`/order/${id}`, { headers });
}
