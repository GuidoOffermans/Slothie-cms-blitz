import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteWebpage = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteWebpage), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const webpage = await db.webpage.deleteMany({ where: { id } })

  return webpage
})
