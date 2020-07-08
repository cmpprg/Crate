import express from 'express';
import schema from '../../../setup/schema';
import graphqlHTTP from 'express-graphql';
import request from 'supertest';

describe ("user mutations", () => {

  let server = express();

  beforeAll(() => {
    server.use('/', graphqlHTTP({
      schema,
      graphiql: false
    }));
  });

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
