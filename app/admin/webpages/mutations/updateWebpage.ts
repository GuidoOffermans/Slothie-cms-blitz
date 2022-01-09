import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateWebpage = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateWebpage),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const webpage = await db.webpage.update({ where: { id }, data })

    return webpage
  }
)
