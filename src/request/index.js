const SERVER = "http://127.0.0.1:1234";

export const POST = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(SERVER + url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
