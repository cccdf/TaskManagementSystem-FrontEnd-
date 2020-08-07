export interface TaskHistory{
    taskId: number;
    userId: number;
    title: string;
    description: string;
    dueDate: Date;
    completed: number;
    remarks: string;
}