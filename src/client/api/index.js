export const get = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return {};
  }
};
