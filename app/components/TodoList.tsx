import { ITask } from "@/types";
import { FaCheck } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="mt-16">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Terefas</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.task}</td>
                                <td>
                                    <button className="btn btn-accent mr-2"><FaCheck size={10} /></button>
                                    <button className="btn btn-primary mr-2"><MdEdit size={10} /></button>
                                    <button className="btn btn-error"><MdDelete size={10} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;