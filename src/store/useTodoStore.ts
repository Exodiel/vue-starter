import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface Todo {
  id: `${string}-${string}-${string}-${string}-${string}`;
  todo: string;
  isComplete: boolean;
}

const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([
    {
      id: crypto.randomUUID(),
      todo: 'Todo 1',
      isComplete: false
    },
    {
      id: crypto.randomUUID(),
      todo: 'Todo 2',
      isComplete: false
    },
    {
      id: crypto.randomUUID(),
      todo: 'Todo 3',
      isComplete: false
    },
    {
      id: crypto.randomUUID(),
      todo: 'Todo 4',
      isComplete: false
    },
  ])

  const addTodo = (value: string) => {
    todos.value.push({
      id: crypto.randomUUID(),
      todo: value,
      isComplete: false
    })
  }

  const completeTodo = (todo: Todo) => {
    todo.isComplete = !todo.isComplete
  }

  const sizeTodos = computed(() => todos.value.length)

  return {
    todos,
    sizeTodos,
    addTodo,
    completeTodo
  }
})

export default useTodoStore