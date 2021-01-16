export const ajax = async (props) => {
  try {
    const { url, successCb } = props,
      data = await axios({
        method: "get",
        url,
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        },
      });

    successCb(data.data);
  } catch (error) {
    if (error.response) {
      document.querySelector(
        "main"
      ).innerHTML = `<p>Error ${error.response.status} : ${error.message}</p>`;
      console.error(error.message);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error(error.message);
    }
  }
};
