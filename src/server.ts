import prisma from "@/lib/prisma";
import app from "./app";


const PORT =5000;

const main = async () => {
	try {
		await prisma.$connect();
		console.log("Connected to the database successfully.");
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Error starting the server:", error);
		await prisma.$disconnect();
		process.exit(1);
	}
};

main();