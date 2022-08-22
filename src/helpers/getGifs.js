export const getGifs = async (category) => {
  const key = "lVLwO8BxwsBjckP3mc52IuQ089XUbFtU";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((data) => ({
    id: data.id,
    image: data.images.downsized.url,
    title: data.title,
  }));

  return gifs;
};
