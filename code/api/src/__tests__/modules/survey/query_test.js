import express from 'express';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';
import bcrypt from 'bcrypt';

import schema from '../../../setup/schema';
import models from '../../../setup/models'

describe ("survey query", () => {

  let server = express();
  let user;
  let survey;

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

    const surveyInfo = {
      userId: user.id,
      style: 'edgy',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    survey = await models.Survey.create(surveyInfo);
  })

  afterAll(async () => {
    await models.Survey.destroy({ where: {}});
    await models.User.destroy({ where: {}});
  });

  it('Can get survey from user id', async () => {
    const response = await request(server)
    .get('/')
    .send({  query: `
      {
        surveyByUser(userId: ${user.id}){
          id
          user{
            name
          }
        }
      }
      `
     })
    .expect(200);

    const surveyId = response.body.data.surveyByUser.id
    const userName = response.body.data.surveyByUser.user.name
    expect(surveyId).toEqual(survey.id)
    expect(userName).toEqual(user.name)
  })
})
