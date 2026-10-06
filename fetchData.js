export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Laden der Daten zur Zeit nicht möglich");
    }
    return { data: await response.json(), error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
