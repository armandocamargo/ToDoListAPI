# ToDoListAPI
## Introdução:

API To Do List é uma API web RESTful desenvolvida em node para a criação de tarefas com o status de pendente ou completa, podendo atualizar, e até mesmo excluir.

## Comandos
 SOLICITAÇÃO HTTP | DESCRIÇÃO       | OPERAÇÃO
 :---------------:|:---------------:|:--------:
POST /create/todo | Cria uma tarefa |Deve ser informado em formato json os atributos tarefa e status ex: { “tarefa”: “tarefa”, “status”: “pending” }
GET /todo | Lista todas as tarefas | Retorna todas as tarefas em formato json
GET /healthcheck | Verifica o status da API | Retorna o status da API via json
GET /metrics | Mostra os indicadores da API | Retorna via json as informações dos indicadores
PUT /change/status | Altera o status da tarefa | Deve ser informado em formato json os atributos id e status ex: { “id”: “1”, “status”: “completed” }
PUT /change/todo | Altera uma tarefa | Deve ser informado em formato json os atributos id e tarefa ex: { “id”: “1”, “tarefa”: “nova tarefa” }
DELETE /delete/todo | Deleta uma tarefa | Deve ser informado em formato json o atributo id da tarefa a ser deletada ex: { “id”: “1” }



## Iniciando 
Para a criação da API utilizei Nodejs, com algumas bibliotecas e para isto será necessário ter alguns pacotes instalados na sua máquina para o funcionamento ou utilizar o DNS a seguir: http://apitodolist.ddns.net 
1.	Baixar/clonar o repositório GITHUB
2.	Instalar o Nodejs
3.	Instalar o npm e dependências gcc e c++
4.	No terminal/cmd ir ate o caminho da pasta todoList e executar o comando npm install
5. Execute npm install sqlite3 para instalar o driver do DB que usamos o SQLITE
6.	Após Rode o comando npm start para que possa iniciar o servidor de desenvolvimento
7.	Foi utilizada a porta 3333, lembre de libera-la no firewall caso seja necessário dentro do seu sistema operacional
8.	Se preferir pode utilizar ferramentas para testar a API como o Insominia , Postman, entre outras.
