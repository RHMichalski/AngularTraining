export interface Task {
  id?: number | null;
  name: string;
  created: string;
  end?: string;
  isDone :boolean;
}
