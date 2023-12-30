const apiEndpoint = "/api";

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiEndpoint}/home`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
