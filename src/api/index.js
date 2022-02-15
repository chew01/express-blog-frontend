export const getAllVisiblePosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};

export const getAllVisibleTags = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/tags');
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};

export const getRecentVisiblePosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};
