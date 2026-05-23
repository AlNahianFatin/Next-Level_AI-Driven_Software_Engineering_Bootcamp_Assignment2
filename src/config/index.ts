import dotenv from "dotenv";
import Path from "path";

dotenv.config({
    path: Path.join(process.cwd(), ".env")
});

const config = {
    connection_string: process.env.NeonDB_Connection_String as string,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire: Number(process.env.JWT_EXPIRE)
};

export default config;