export type List = {
  id: number;
  title: string;
  icon: string;
  color: string;
  metadata: Record<string, any>;
  tasks: Array<Task>
}

export type Task = {
  id: number;
  title: string;
  note: string;
  done: boolean;
  list_id: number;
  due_date: string;
  metadata: Record<string, any>;
}