import express from 'express';
import request from 'supertest';
import graphqlHTTP from 'express-graphql';
import bcrypt from 'bcrypt';

import schema from '../../../setup/schema';
import models from '../../../setup/models';
import db from '../../../setup/database';

describe ("user queries", () => {

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

  it("gets all users", async() => {
    let response = await request(server)
      .get('/')
      .send({ query: '{ users { name } }'})
      .expect(200);

    expect(response.body.data.users.length).toEqual(2);
    expect(response.body.data.users[0].name).toEqual("The Admin");
  });

  it("gets single user by id", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: `{ user(id: ${admin.id}) { name } }`})
      .expect(200);

    expect(response.body.data.user.name).toEqual("The Admin");
    expect(response.body.data.user.name).not.toEqual("The User");
  });

  it("can successfully login a user", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: `
        {
          userLogin(email: "${user.email}", password: "123456"){
            user {
              id
              name
            }
          }
        }`})
      .expect(200);

    expect(response.body.data.userLogin.user.id).toEqual(user.id);
    expect(response.body.data.userLogin.user.name).toEqual("The User");
  });

  it("will not login a user with incorrect credentials", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: `
        {
          userLogin(email: "${user.email}", password: "456"){
            user {
              id
              name
            }
          }
        }`})
      .expect(200);

    expect(response.body.errors[0].message).toEqual('Sorry, the password you entered is incorrect. Please try again.');
  });
});
