/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const supertest = require("supertest");
const mongoose = require("mongoose");
const { createUser } = require("./user.service");

const app = require("../../app");
const connectDB = require("../../config/database");
const users = require("./user.model");

const request = supertest(app);

describe("User Endpoint", () => {
  beforeAll(async () => {
    await connectDB();
    await createUser({
      email: "pruebauser@test.com",
      password: "A123456",
    });
  });
  afterAll(async () => {
    await users.deleteMany();
    await mongoose.connection.close();
  });

  describe("get all users", () => {
    it("should response with a 200 status code", async () => {
      const res = await request.get("/api/users/");
      expect(res.statusCode).toEqual(200);
    });
    it("should respond with an array of users GET", async () => {
      const res = await request.get("/api/users");
      expect(res.body).toBeInstanceOf(Array);
    });
  });

  describe("get one users", () => {
    it("should response with a 200 status code", async () => {
      const res = await request.get("/api/users/");
      const userId = res.body[0]._id;
      const getOneUser = await request.get(`/api/users/${userId}`);
      expect(getOneUser.statusCode).toEqual(200);
    });
    it("should respond with an array", async () => {
      const res = await request.get("/api/users");
      const userId = res.body[0]._id;
      const respond = await request.get(`/api/users/${userId}`);

      expect(respond.body).toEqual(
        expect.objectContaining({
          email: expect.any(String),
          password: expect.any(String),
        }),
      );
    });
  });

  //   describe("create a user", () => {
  //     it("should respond with a 500 status code POST", async () => {
  //       const res = await request.post("/api/users").send({
  //         email: "",
  //         password: "",
  //       });
  //       expect(res.statusCode).toEqual(500);
  //     });
  //   });
});
