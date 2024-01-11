import { PriorityQueue } from "./PriorityQueue";

export interface SchedulerI {
  postTask(task: () => Promise<any>, priority: number): void;
  run(): Promise<void>;
}

// @ts-expect-error
export class Scheduler implements SchedulerI {}
