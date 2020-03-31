import API from "./../lib/Api";

export async function coupons() {
  return API.get("/coupon");
}

export async function getMyCoupons(id) {
  return API.get(`/coupon/${id}`);
}

export async function addView(id) {
  return API.get(`/coupon/view/${id}`);
}

export async function addToStore(id) {
  return API.get(`/coupon/store/${id}`);
}

export async function deleteCoupons(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.delete(`/coupon/${id}`, { headers });
}
export async function addCoupon(coupon, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.post("/coupon", coupon, { headers });
}
export async function updateCoupon(id, coupon, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.patch(`/coupon/${id}`, coupon, { headers });
}
