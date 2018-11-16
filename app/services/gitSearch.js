import axios from 'axios';

export default async (searchTerm) => {
  try {
    const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`;
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
