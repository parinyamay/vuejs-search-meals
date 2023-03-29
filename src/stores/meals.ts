import axiosClient from '@/axiosClient'
import { defineStore } from 'pinia'

// interface Meals {
//   idMeal: string,
//   category: string,
//   image: string,

// }

export const useMealsStore = defineStore('meals', {
  state: () => ({
    searchedMeals: {
      loading: false as boolean,
      data: [] as any[],
    },
  }),

  getters: {
    getMeals: (state) => state.searchedMeals.data,

    isLoading: (state) => state.searchedMeals.loading,
  },

  actions: {
    showLoading() {
      this.searchedMeals.loading = true
    },

    hideLoading() {
      this.searchedMeals.loading = false
    },

    searchMeals(keyword: string | string[]) {
      this.showLoading()
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        this.searchedMeals.data = data.meals
        this.hideLoading()
      })
    },

    searchMealsByLetter(keyword: string | string[]) {
      this.showLoading()
      axiosClient.get(`search.php?f=${keyword}`).then(({ data }) => {
        this.searchedMeals.data = data.meals
        this.hideLoading()
      })
    },

    searchMealsByIngredients(keyword: string | string[]) {
      this.showLoading()
      axiosClient.get(`filter.php?i=${keyword}`).then(({ data }) => {
        this.searchedMeals.data = data.meals || []
        this.hideLoading()
      })
    },
  },
})
