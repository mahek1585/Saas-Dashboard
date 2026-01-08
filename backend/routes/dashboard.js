export const loginUser = async (email, password) => {
  const res = await axios.post("http://localhost:5000/api/auth/login", {
    email,
    password,
  });

  if (res.data.token) {
    // Token localStorage me save karo
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  return res.data;
};
