import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  //Preenche dados iniciais para o banco de dados
  seeds(server) {
    server.db.loadData(
      {
        transactions: [
          {
            id: 1,
            title: 'Desenvolvimento de websites',
            amount: 6000,
            category: 'Desenvolvimento',
            type: 'deposit',
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel de apartamento',
            amount: 1100,
            category: 'Aluguel',
            type: 'withdraw',
            createdAt: new Date('2021-02-14 11:00:00'),
          },

        ]
      }
    )
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

