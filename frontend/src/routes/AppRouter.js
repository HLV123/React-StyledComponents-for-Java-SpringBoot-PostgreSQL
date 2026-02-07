import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import RecipeDetailPage from '../pages/RecipeDetailPage';
import RecipesPage from '../pages/RecipesPage';
import {
  ChefsPage, LivePage, LearningPage, PricingPage,
  LoginPage, RegisterPage, SearchPage, ProfilePage, NotFoundPage,
} from '../pages/OtherPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'recipes', element: <RecipesPage /> },
      { path: 'recipe/:id', element: <RecipeDetailPage /> },
      { path: 'chefs', element: <ChefsPage /> },
      { path: 'chef/:id', element: <ChefsPage /> },
      { path: 'live', element: <LivePage /> },
      { path: 'learning', element: <LearningPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },

  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
