import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: () => import('../components/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: () => import('../views/MealsByName.vue'),
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: () => import('../views/MealsByletter.vue'),
        },
        {
          path: '/ingredients/:ingredient?',
          name: 'Ingredients',
          component: () => import('../views/IngredientView.vue'),
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredient',
          component: () => import('../views/MealsByIngredient.vue'),
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: () => import('../views/MealDetails.vue'),
        },
      ],
    },
    {
      path: '/guest',
      component: () => import('../components/Guestlayout.vue'),
    },
  ],
})

export default router
