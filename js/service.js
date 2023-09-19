const service = {};

service.getMovies = async () => {
  try {
    const response = await fetch("../js/data.json");
    const productsfromjson = await response.json();
    return productsfromjson;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export default service;
