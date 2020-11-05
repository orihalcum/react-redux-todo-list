export const addTodo = data => {
  return({
    type: "ADD",
    payload: data
  })
}
export const delTodo = data => {
  console.log('delTodo data', data)
  return({
    type: "DEL",
    payload: data
  })
}