import { NextResponse } from "next/server";
import { taskList, ITask } from "../route";

export async function PUT(request: Request, params: {id: string}) {
    const body = await request.json();

    if (!body) return NextResponse.json({
        message: 'Invalid request payload'
    }, { status: 400 });

    const taskId = Number(params.id);
    const taskIndex = taskList.findIndex(task => task.id === taskId);

    let newState: boolean = false;

    if (body.completed !== true) {
        newState = true
    }

    const updatedTask: ITask = { id: taskList[taskIndex].id, completed: newState, date:  taskList[taskIndex].date, description:  taskList[taskIndex].description, title:  taskList[taskIndex].title };

    return NextResponse.json({data: updatedTask, status: 201, message: "The task state was updated successfully." });
}