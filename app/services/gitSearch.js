import axios from 'axios';

export const gitSearch = async (searchTerm) => {
  try {
    const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`;
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return null;
  }
};

export const gitSearchCommits = async (repoFullName) => {
  try {
    const config = {
      headers: {
        Accept: 'application/vnd.github.cloak-preview+json',
      },
    };
    const url = `https://api.github.com/search/commits?q=${repoFullName}&sort=committer-date&order=desc`;
    const response = await axios.get(url, config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return null;
  }
};
