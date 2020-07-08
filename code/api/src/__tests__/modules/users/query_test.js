import express from 'express';
import schema from '../../../setup/schema';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';
import model from '../../../setup/models';
import bcrypt from 'bcrypt'
import config from '../../../config/server';
import sequelize from 'sequelize'


describe ("user queries", () => {

let server = express();

  beforeAll(() => {
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
    async(done) => {
      await sequelize.sync();
      await model.User.bulkInsert([user1, user2]);
      done();
    }

    console.log("*************")
    console.log(model.User.findAll());
    console.log("*************")
  });

  // afterAll(() => {
  //   model.User.destroy({where: {}})
  // });

  it("gets all users", async() => {
    // expect.assertions(2)
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name } }'})
      .expect(200);

      console.log(response.body)
    // expect(response.body.data.users.length).toEqual(2);
    // expect(response.body.data.users[0].name).toEqual("The Admin");
  });

  // it("gets single user by id", async() => {
  //   const response = await request(server)
  //     .get('/')
  //     .send({ query: '{ user(id: 1) { name } }'})
  //     .expect(200);
  //
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
