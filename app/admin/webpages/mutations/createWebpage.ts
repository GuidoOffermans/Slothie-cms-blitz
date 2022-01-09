import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateWebpage = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateWebpage), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const webpage = await db.webpage.create({ data: input })

  return webpage
})
