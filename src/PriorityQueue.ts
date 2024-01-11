export interface PriorityQueueI<T> {
  enqueue(value: T, priority: number): void;
  dequeue(): T | undefined;
  size(): number;
}

// @ts-expect-error
export class PriorityQueue<T> implements PriorityQueueI<T> {}
