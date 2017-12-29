import React from 'react';

export const ListTodosPage = ({todos}) => (
    todos.map((todo, index) => <div key={index}>{todo.title}</div>)
);