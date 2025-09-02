import dotenv from "dotenv";

// Configuring env
dotenv.config({
    path: "./.env",
    quiet: true
});

export const PORT = process.env.PORT || 3001;
