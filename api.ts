import { ITask } from "./types";

const baseUrl = 'http://localhost:3005';

export const getAllTodos = async (): Promise<ITask[]> => {
    const url = `${baseUrl}/tasks`;
    const res = await fetch(url, {
        cache: 'no-store',
    });
    const todos = await res.json();
    return todos;
};