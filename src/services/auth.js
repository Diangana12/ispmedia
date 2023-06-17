import api from "./api";

export function signIn(email, password) {
  return new Promise((resolve, reject) => {
    api
      .get("/usuarios")
      .then((response) => {
        const { data } = response;
        const user = data.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          const { token, ...userData } = user;
          resolve({ token, user: userData });
        } else {
          reject(new Error("Invalid credentials"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
