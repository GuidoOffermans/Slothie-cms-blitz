import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetWebpage = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetWebpage), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const webpage = await db.webpage.findFirst({ where: { id } })

  if (!webpage) throw new NotFoundError()

  return webpage
})
