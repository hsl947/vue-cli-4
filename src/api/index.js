import $axios from '@/utils/request'

export const login = (data) =>
  $axios.post('https://www.hongshaoli.com/list', data)
