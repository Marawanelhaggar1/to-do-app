export interface Todos {
  id: number;
  user_id: number;
  task: string;
  completed: boolean;
}

export interface ToDoBody {
  task: string;
}
