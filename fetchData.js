export const fetchData = async (url) => {
  const controller = new AbortController();

  const abortTimeout = setTimeout(() => {
    controller.abort();
  }, 3000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error("Laden der Daten zur Zeit nicht möglich");
    }
    clearTimeout(abortTimeout);
    return { data: await response.json(), error: null };
  } catch (error) {
    clearTimeout(abortTimeout);
    return { data: null, error: error.message };
  }
};
