import axiosClient from "./axiosClient";

const slidersApi = {
  getSlides : () => {
    const url = "/sliders";

    return axiosClient.get(url);
  },
};

export default slidersApi;