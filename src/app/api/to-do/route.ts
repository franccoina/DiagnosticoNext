import { NextResponse } from "next/server";

export interface ITask {
    id: number;
    title: string;
    date: string;
    description: string;
    completed: boolean;
}

export const taskList: ITask[] = [
    {
        id: 1,
        title: 'Task 1',
        date: '2022-01-01',
        description: 'This is task 1',
        completed: false,
    },
    {
        id: 2,
        title: 'Task 2',
        date: '2022-01-01',
        description: 'This is task 2',
        completed: true
    }
];

export async function GET(request: Request) {
    const url = new URL(request.url);
    console.log(url);

    const Tasks = taskList;

    const status = url.searchParams.get('status');
    console.log(status);

    return NextResponse.json({
        message: "The tasks were fetched successfully.",
        status: 201,
        data: Tasks});
}

export async function POST(request: Request) {
    const body = await request.json();

    if (!body) return NextResponse.json({
        message: 'Invalid request payload'
    }, { status: 400 });


    if (!body.date || !body.description || !body.title) {
        return NextResponse.json({
            message: 'Missing required fields: date, description, title'
        }, { status: 400 });
    }

    const newTask: ITask = { id: Date.now(), completed: false, date: body.date, description: body.description, title: body.title };
    taskList.push(newTask);

    return NextResponse.json(newTask, { status: 201 });
}