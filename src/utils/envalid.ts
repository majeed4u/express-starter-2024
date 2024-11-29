import { str, num, email, bool, cleanEnv, host, port } from 'envalid'
import dotenv from 'dotenv'
dotenv.config()

const env = cleanEnv(process.env, {
    GOOGLE_CLIENT_ID: str(),
    GOOGLE_CLIENT_SECRET: str(),
    PORT: port(),
    GITHUB_CLIENT_ID: str(),
    GITHUB_CLIENT_SECRET: str(),
    SESSION_SECRET: str(),
    CORS_ORIGIN: host(),

})


export default env
