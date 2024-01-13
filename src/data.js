export let isSubscrided = false

export const todos = [
  { id: "1", name: "Faire les courses" },
  { id: "2", name: "Faire à manger" },
  { id: "3", name: "Faire la cuisine" },
  { id: "4", name: "Faire le ménage" },
]

export const notes = [
  { id: "1", name: "Note: penser à lire ce livre" },
  { id: "2", name: "Note suivante" },
  { id: "3", name: "Note suivante bis" },
  { id: "4", name: "Note suivante bis +" },
]

export function apiSubscribe() {
  isSubscrided = true
}
export function apiUnSubscribe() {
  isSubscrided = false
}

function fetchAPIMock() {
  if (isSubscrided) {
    return { todos, notes }
  }
  throw new Error("Non abonné aux evenements de cet API")
}

export function fetchTodoAPI() {
  return todos
}

export default fetchAPIMock
