import API from "./../lib/Api";

export async function articles() {
  return API.get("/article");
}

export async function addView(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };

  return API.get(`/article/view/${id}`, { headers });
}

export async function getMyArticles(user) {
  return API.get(`/article/${user}`);
}

export async function publishArticle(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.get(`/article/publish/${id}`, { headers });
}

export async function deleteArticle(id, token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.delete(`/article/${id}`, { headers });
}
