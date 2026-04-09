import { writeData, readData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        if (Object.keys(body).length == 0) {
            throw createError({
                statusCode: 400,
                statusMessage: "Request Body is empty, please provide data"
            });
        }
        const {id, email, name, password, image, enable} = body;
        if (email == null || name == null || password == null || image == null || enable == null) {
            throw createError({
                statusCode: 400,
                statusMessage: "All fields are required"
            });
        }

        if (typeof id != "number" || typeof email != "string" || typeof name != "string" || typeof password != "string" || typeof image != "string" || typeof enable != "boolean") {
            throw createError({
                statusCode: 400,
                statusMessage: "id: Invalid data type"
            });
        }

        const data = await readData();

        let item = data.find(item => item.id === Number(id));
        if (item) {
            throw createError({
                statusCode: 400,
                statusMessage: "Item with the same id already exists"
            });
        }

        const newItem = {
            id,
            email,
            name,
            password,
            image,
            enable
        };

        data.push(newItem);

        await writeData(data);

        return {
            success: true,
            message: "Item created successfully",
            data: newItem
        }


    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Unable to create item: " + error.statusMessage
        });
    }
});