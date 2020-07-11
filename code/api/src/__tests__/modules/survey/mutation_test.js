import express from 'express';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';
import bcrypt from 'bcrypt';

import schema from '../../../setup/schema';
import models from '../../../setup/models'

describe ("survey mutations", () => {

  let server = express();
  let user;

  beforeAll(async () => {
    server.use('/', graphqlHTTP({
      schema,
      graphiql: false
    }));

    const user1 = {
      name: 'The User',
      email: 'user@crate.com',
      password: bcrypt.hashSync('123456', 10),
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    user = await models.User.create(user1);
  })

  afterAll(async () => {
    await models.Survey.destroy({ where: {}});
    await models.User.destroy({ where: {}});
  });

  it('Can create a survey', async() => {
    const response = await request(server)
      .post('/')
      .send({  query: `
        mutation {
          surveyCreate(userId: ${user.id}, tops: "sporty", bottoms: "formal", dresses: "formal", shoes: "formal", accessories: "edgy"){
            id
            style
          }
        }`
       })
      .expect(200);

      const surveyStyle = response.body.data.surveyCreate.style
      expect(surveyStyle).toBe('formal')
  })
})
