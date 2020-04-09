const express = require('express');
const connection = require('./database/connection');
const apiMetrics = require('prometheus-api-metrics');

const routes = express.Router();

routes.get('/status', require('express-status-monitor')());

routes.post('/create/todo', async (request, response) => {
    const { tarefa, status } = request.body;


    await connection('todoList').insert({
        tarefa,
        status
    });

    return response.json('Tarefa inserida com sucesso!');
});

routes.get('/todo', async (request, response) => {
    const todos = await connection('todoList').select('*');
    
    return response.json(todos);
});

routes.put('/change/status', async (request, response) => {
    const { id, status } = request.body;

    await connection('todoList').where('id', id).update({status, status});

    return response.json('Status altualizado');
});

routes.put('/change/todo', async (request, response) => {
    const { id, tarefa } = request.body;

    await connection('todoList').where('id', id).update({tarefa, tarefa});

    return response.json('Tarefa atualizada');
});

routes.delete('/delete/todo', async (request, response) => {
    const { id } = request.body;

    await connection('todoList').where('id', id).delete();

    return response.json('Tarefa apagada!');
});

routes.get('/healthcheck',  require('express-healthcheck')({
    healthy: function () {
        return { API: 'is ok' };
    }
}));

routes.use(apiMetrics());

module.exports = routes;