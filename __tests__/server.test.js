const faker = require("faker");
const request = require("supertest");
const app = require("../app");

describe("Post endpoint", () => {
  it("should create new user", async () => {
    const res = await request(app).post("/api/v1/user/register").send({
      name: faker.name.firstName(),
      email: "sulabh@sulabh.com",
      password: "password",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body);
  });
});

describe("Post endpoint", () => {
  it("should login user", async () => {
    const res = await request(app).post("/api/v1/user/login").send({
      email: "sulabh@sulabh.com",
      password: "password",
    });
    console.log(res.status);
    expect(res.statusCode).toBe(201);
    expect(res.body);
  });
});
