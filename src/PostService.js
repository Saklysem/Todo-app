import axios from 'axios';
axios.defaults.baseURL ='https://saklysem.herokuapp.com/api/tasklist';

export default class PostService {
  getAllPosts() {
    return axios.get('/posts');
  }

  getPosts(number) {
    return axios.get(`/posts/${number}`);
  }

  writePost(post) {
    if (post.id) {
      return axios.put(`/post/${post.id}`, post);
    } else return axios.post('/post', post);
  }

  deletePost(id) {
    return axios.delete(`/post/${id}`);
  }
}
