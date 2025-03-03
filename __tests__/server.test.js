const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
    it("should return a message", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Hello, Jenkins!" });
    });
});

