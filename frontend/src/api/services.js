import apiClient from './client';

export const authAPI = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  register: (userData) => apiClient.post('/auth/register', userData),
  logout: () => apiClient.post('/auth/logout'),
  refreshToken: (refreshToken) => apiClient.post('/auth/refresh', { refreshToken }),
  forgotPassword: (email) => apiClient.post('/auth/forgot-password', { email }),
  resetPassword: (token, password) => apiClient.post('/auth/reset-password', { token, password }),
  getProfile: () => apiClient.get('/auth/me'),
  updateProfile: (data) => apiClient.put('/auth/me', data),
  changePassword: (data) => apiClient.put('/auth/change-password', data),
};

export const recipeAPI = {
  getAll: (params) => apiClient.get('/recipes', { params }),
  getFeatured: () => apiClient.get('/recipes/featured'),
  getTrending: () => apiClient.get('/recipes/trending'),
  getById: (id) => apiClient.get(`/recipes/${id}`),
  getByChef: (chefId, params) => apiClient.get(`/chefs/${chefId}/recipes`, { params }),
  getByCategory: (categoryId, params) => apiClient.get(`/categories/${categoryId}/recipes`, { params }),
  search: (query, params) => apiClient.get('/recipes/search', { params: { q: query, ...params } }),
  like: (id) => apiClient.post(`/recipes/${id}/like`),
  unlike: (id) => apiClient.delete(`/recipes/${id}/like`),
  bookmark: (id) => apiClient.post(`/recipes/${id}/bookmark`),
  removeBookmark: (id) => apiClient.delete(`/recipes/${id}/bookmark`),
  getComments: (id, params) => apiClient.get(`/recipes/${id}/comments`, { params }),
  addComment: (id, content) => apiClient.post(`/recipes/${id}/comments`, { content }),
  rate: (id, rating) => apiClient.post(`/recipes/${id}/rate`, { rating }),
};

export const categoryAPI = {
  getAll: () => apiClient.get('/categories'),
};

export const chefAPI = {
  getAll: (params) => apiClient.get('/chefs', { params }),
  getFeatured: () => apiClient.get('/chefs/featured'),
  getById: (id) => apiClient.get(`/chefs/${id}`),
  follow: (id) => apiClient.post(`/chefs/${id}/follow`),
  unfollow: (id) => apiClient.delete(`/chefs/${id}/follow`),
};

export const videoAPI = {
  getStreamUrl: (videoId) => apiClient.get(`/videos/${videoId}/stream`),
  updateProgress: (videoId, data) => apiClient.put(`/videos/${videoId}/progress`, data),
  getProgress: (videoId) => apiClient.get(`/videos/${videoId}/progress`),
};

export const liveAPI = {
  getUpcoming: () => apiClient.get('/live-classes/upcoming'),
  getLive: () => apiClient.get('/live-classes/live'),
  getById: (id) => apiClient.get(`/live-classes/${id}`),
  register: (id) => apiClient.post(`/live-classes/${id}/register`),
  unregister: (id) => apiClient.delete(`/live-classes/${id}/register`),
  getToken: (id) => apiClient.get(`/live-classes/${id}/token`),
};

export const learningAPI = {
  getPaths: () => apiClient.get('/learning-paths'),
  getPathById: (id) => apiClient.get(`/learning-paths/${id}`),
  enroll: (id) => apiClient.post(`/learning-paths/${id}/enroll`),
  getProgress: (id) => apiClient.get(`/learning-paths/${id}/progress`),
  completeLesson: (pathId, lessonId) =>
    apiClient.post(`/learning-paths/${pathId}/lessons/${lessonId}/complete`),
};

export const subscriptionAPI = {
  getPlans: () => apiClient.get('/subscriptions/plans'),
  getCurrentPlan: () => apiClient.get('/subscriptions/current'),
  subscribe: (planId, paymentMethod) =>
    apiClient.post('/subscriptions', { planId, paymentMethod }),
  cancel: () => apiClient.delete('/subscriptions/current'),
  getPaymentHistory: (params) => apiClient.get('/subscriptions/payments', { params }),
};

export const searchAPI = {
  global: (query, params) => apiClient.get('/search', { params: { q: query, ...params } }),
  suggestions: (query) => apiClient.get('/search/suggestions', { params: { q: query } }),
};

export const newsletterAPI = {
  subscribe: (email) => apiClient.post('/newsletter/subscribe', { email }),
};
