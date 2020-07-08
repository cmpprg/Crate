import express from 'express';
import schema from '../../../setup/schema';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';
import model from '../../../setup/models';
import bcrypt from 'bcrypt';
import db from '../../../setup/database';

describe ("user queries", () => {

let server = express();
let admin;

  beforeAll(async() => {
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
      admin = await model.User.create(user1);
      await model.User.create(user2);
  });

  afterAll(async() => {
    await model.User.destroy({ where: {}});
    db.close();
    console.log("((((((((((((()))))))))))))")
  });

  it("gets all users", async() => {
    // expect.assertions(2)
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name } }'})
      .expect(200);
      console.log(admin.id)

    // expect(response.body.data.users.length).toEqual(2);
    // expect(response.body.data.users[0].name).toEqual("The Admin");
  });
  //
  // it("gets single user by id", async() => {
  //   const response = await request(server)
  //     .get('/')
  //     .send({ query: '{ user(id: user1.id) { name } }'})
  //     .expect(200);
  //   console.log(response.body.data)
  //   expect(response.body.data.user.name).toEqual("The Admin");
  //   expect(response.body.data.user.name).not.toEqual("The User");
  // });
  //
  // it("can successfully login a user", async() => {
  //   const response = await request(server)
  //     .get('/')
  //     .send({ query: `
  //       {
  //         userLogin(email: "user@crate.com", password: "123456"){
  //           user {
  //             id
  //             name
  //           }
  //         }
  //       }`})
  //     .expect(200);
  //
  //   expect(response.body.data.userLogin.user.id).toEqual(2);
  //   expect(response.body.data.userLogin.user.name).toEqual("The User");
  // });
  //
  // it("will not login a user with incorrect credentials", async() => {
  //   const response = await request(server)
  //     .get('/')
  //     .send({ query: `
  //       {
  //         userLogin(email: "user@crate.com", password: "456"){
  //           user {
  //             id
  //             name
  //           }
  //         }
  //       }`})
  //     .expect(200);
  //
  //   expect(response.body.errors[0].message).toEqual('Sorry, the password you entered is incorrect. Please try again.');
  // });

});
