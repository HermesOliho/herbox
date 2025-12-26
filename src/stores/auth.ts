import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, type Ref } from 'vue'
import type { Credentials, User } from '@/types/auth'

export const useAuthStore = defineStore('auth', () => {
  // States
  const user: Ref<User | null> = ref(null)
  const token: Ref<string | null> = ref(null)

  // Actions
  const isAuthenticated = () => !!token.value
  const login = async (credentials: Credentials) => {
    try {
      const response = await axios.post('/api/login', credentials)
      token.value = response.data.token
      user.value = response.data.user
      if (token.value !== null) localStorage.setItem('token', token.value)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
    } catch (error) {
      throw error
    }
  }
  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }

  return { user, login, logout, isAuthenticated }
})
