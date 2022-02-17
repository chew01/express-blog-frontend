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

export const getPostFromLink = async (link) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${link}`);
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};

export const getCommentsFromLink = async (link) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/posts/${link}/comments`
    );
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};

export const getPostsFromTagName = async (name) => {
  try {
    const response = await fetch(`http://localhost:3000/api/tags/${name}`);
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};

export const getPostsFromUser = async (user) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${user}`);
    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error('failed!');
    }
    return responseJSON.data;
  } catch (e) {
    throw new Error('error fetching!');
  }
};
