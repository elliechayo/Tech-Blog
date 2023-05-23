const userSeeds = require("./userSeeds");
const postSeeds = require("./postSeeds");
const commentSeeds = require("./commentSeeds");

const db = require("../config/db");

async function main() {
    await db.sync({ force: false });
    await userSeeds();
    console.log("-------- Seeded Users Data --------");
    await postSeeds();
    console.log("-------- Seeded Posts Data --------");
    await commentSeeds();
    console.log("-------- Seeded Comments Data --------");
    process.exit(0);
}

main();