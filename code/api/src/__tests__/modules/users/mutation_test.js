import express from 'express';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';

import schema from '../../../setup/schema';
import db from '../../../setup/database';
import models from '../../../setup/models'

describe ("user mutations", () => {

  let server = express();

  beforeAll(async() => {
    server.use('/', graphqlHTTP({
      schema,
      graphiql: false
    }));
  });

  afterAll(async() => {
    await models.User.destroy({ where: {}});
    db.close();
  })

  it("can signup a user", async() => {
    const response = await request(server)
      .post('/')
      .send({  query: `
          mutation signup{
            userSignup(name: "travis",  email: "travis@crate.com", password: "123") {
              name
            }
          }`
       })
      .expect(200);
      console.log(response.body.data);
      // expect(response.body.data.userSignUp.name).toEqual("travis");
  });

});
