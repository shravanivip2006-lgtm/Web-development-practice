const fastify = require("fastify")({ logger: true });

const students = [];

fastify.post("/students", async (request, reply) => {
    const { name } = request.body;

    students.push(name);

    return {
        message: "Name added successfully",
        name: name
    };
});

fastify.get("/students", async (request, reply) => {
    return students;
});

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server running at ${address}`);
});