import axios from 'axios'

const API = axios.create({
  baseURL: 'https://nesine-case-study.onrender.com/'
})

export const getBets = async () => {
  const data = await API.get('bets')
  return data?.data
}
