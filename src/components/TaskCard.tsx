import { useState } from "react";
import { getTime } from "@/lib/getTime";
import { toggleTaskState } from "@/lib/toggleTaskState";
import { Task } from "@prisma/client";

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    const [isFinished, setIsFinised] = useState(task.finished);

    return (
        <div
            className={`${
                isFinished
                    ? "border-green-600 shadow-green-300 sm:border-green-300 sm:hover:border-green-600"
                    : "border-red-600 shadow-red-300 sm:border-red-300 sm:hover:border-red-600"
            } text-ctp-base-text bg-ctp-surface-0 flex min-h-14 rounded-lg border-2 py-2 shadow-lg sm:py-8`}
        >
            <input
                type="checkbox"
                className="mx-2 max-w-10 flex-auto"
                checked={isFinished}
                onChange={() => {
                    setIsFinised(!isFinished);
                    toggleTaskState(task.id, !isFinished);
                }}
            />
            <h3 className="flex-1 break-all">{task.task_name}</h3>
            <h3 className="hidden break-all sm:inline sm:flex-1">
                {task.course_name}
            </h3>
            <h3 className="flex-1 break-words">{`Due: ${
                task.due_date ? getTime(task.due_date) : "-"
            }`}</h3>
        </div>
    );
};

export default TaskCard;
