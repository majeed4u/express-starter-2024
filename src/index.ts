import app from "@/app"
import env from '@/utils/envalid'
import logger from "@/utils/logger"

const PORT = env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    logger.info(`Server is running on port ${PORT}`)
})