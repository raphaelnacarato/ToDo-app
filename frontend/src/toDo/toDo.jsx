import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '../templates/pageHeader'
import ToDoForm from './toDoForm'
import ToDoList from './toDoList'

const URL = 'http://localhost:3004/api/todos'

const ToDo = () => {
    const [description, setDescription] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        refresh()
    }, [description])

    const refresh = () => {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => setList(resp.data))
    }

    const search = () => {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => setList(resp.data))
    }

    const change = (e) => {
        setDescription(e.target.value)
    }

    const add = () => {
        axios.post(URL, { description })
            .then(resp => setDescription(''))
    }

    const remove = (toDo) => {
        if (!setDescription) {
            axios.delete(`${URL}/${toDo._id}`)
                .then(resp => refresh())
        } else {
            axios.delete(`${URL}/${toDo._id}`)
                .then(resp => search())
        }
    }

    const markAsDone = (toDo) => {
        if (!setDescription) {
            axios.put(`${URL}/${toDo._id}`, { ...toDo, done: true })
                .then(resp => refresh())
        } else {
            axios.put(`${URL}/${toDo._id}`, { ...toDo, done: true })
                .then(resp => search())
        }
    }

    const markAsPending = (toDo) => {
        if (!setDescription) {
            axios.put(`${URL}/${toDo._id}`, { ...toDo, done: false })
                .then(resp => refresh())
        } else {
            axios.put(`${URL}/${toDo._id}`, { ...toDo, done: false })
                .then(resp => search())
        }
    }

    const clear = () => {
        refresh(setDescription(''))
    }

    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro' />
            <ToDoForm
                description={description}
                onChange={change}
                handleAdd={add}
                handleSearch={search}
                handleClear={clear}
            />
            <ToDoList
                list={list}
                handleRemove={remove}
                handleMarkAsDone={markAsDone}
                handleMarkAsPending={markAsPending}
            />
        </div>
    )
}


export default ToDo