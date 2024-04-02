export const login = async () => {
  const res = await axios.post("http://54.180.90.124:8080/auth", {
    email: "asdf",
    password: "asdf",
  });
  console.log(res.data);
};

export const join = async () => {
  const res = await api.post("http://54.180.90.124:8080/accounts", {
    email: "shoon199@naver.com",
    password: "1234",
    nickname: "sehun",
    phoneNumber: "01032945804",
  });
};
