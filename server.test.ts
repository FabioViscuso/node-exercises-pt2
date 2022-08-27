
import supertest from "supertest";
import * as server from "./http-server/server";

const simulation = supertest(server);

test("GET /", async () => {
    const response = await simulation.get("/").expect("Content-Type", /application\/json/)

    expect(response.body).toEqual({ message: 'hello!' })
})
