import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetWebpagesInput
  extends Pick<Prisma.WebpageFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetWebpagesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: webpages,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.webpage.count({ where }),
      query: (paginateArgs) => db.webpage.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      webpages,
      nextPage,
      hasMore,
      count,
    }
  }
)
