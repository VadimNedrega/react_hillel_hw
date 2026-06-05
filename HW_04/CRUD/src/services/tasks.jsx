import axios from 'axios'

const API_URL = 'https://6a1f050cb79eec0d6cf06eab.mockapi.io/api/v1/task_manager'

export const promiseTasks = axios
  .get(API_URL)
  .then(res => res.data)

export const createTask = async (task) => {
  const { data } = await axios.post(API_URL, task)
  return data
}

export const updateTask = async (id, task) => {
  const { data } = await axios.put(`${API_URL}/${id}`, task)
  return data
}

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
  return id
}