import React from 'react'
import Task from './Task'

const TaskList = ({ tasks, setValues, setUpdating, handleDelete }) => {
    return (
        <>
            <h2 className="text-2xl text-gray-600">Lista de Tareas</h2>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    !tasks.length ? <p className="text-lg text-gray-600">No hay tareas...</p>
                        : tasks.map((task) => (
                            <Task task={task} key={task.id} setValues={setValues} handleDelete={handleDelete} setUpdating={setUpdating} />
                        ))
                }
            </div>
        </>
    )
}

export default TaskList
