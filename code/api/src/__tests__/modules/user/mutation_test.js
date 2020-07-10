import express from 'express';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';
import bcrypt from 'bcrypt';

import schema from '../../../setup/schema';
import models from '../../../setup/models'

describe ("user mutations", () => {

  let server = express();
  let admin;
  let user;

  beforeAll(async () => {
    server.use('/', graphqlHTTP({
      schema,
      graphiql: false
    }));

    const user1 = {
      name: 'The Admin',
      email: 'admin@crate.com',
      password: bcrypt.hashSync('123456', 10),
      role: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const user2 = {
      name: 'The User',
      email: 'user@crate.com',
      password: bcrypt.hashSync('123456', 10),
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    admin = await models.User.create(user1);
    user = await models.User.create(user2);
  })

  afterAll(async () => {
    await models.User.destroy({ where: {}});
  });

  test("can signup a user", async() => {
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

      expect(response.body.data.userSignup.name).toEqual("travis");
  });

  it("can remove a user", async() => {
    let is_here = await models.User.findOne({where: {id: user.id}});
    expect(is_here.id).toEqual(user.id)

    const response = await request(server)
      .post('/')
      .send({  query: `
        mutation userRemove {
          userRemove(id: ${user.id}){
            name
          }
        }
        `
       })
      .expect(200);

     let not_here = await models.User.findOne({where: {id: user.id}});
     expect(not_here).toBe(null)
  });

});
