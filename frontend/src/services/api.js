const BASE_URL = "http://localhost/backend/api";

export const saveResume = async (data) => {
  return fetch(`${BASE_URL}/resume/saveResume.php`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const loginUser = async (data) => {
  return fetch(`${BASE_URL}/auth/login.php`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};