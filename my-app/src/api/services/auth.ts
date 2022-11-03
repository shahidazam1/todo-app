import { http } from "../http";

const signin = (data: any) => {
  return http.post("/auth/signin", data);
};

const signup = (data: any) => {
  return http.post("/auth/signup", data);
};
export { signin, signup };
