import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getWebpages from "app/admin/webpages/queries/getWebpages"

const ITEMS_PER_PAGE = 100

export const WebpagesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ webpages, hasMore }] = usePaginatedQuery(getWebpages, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {webpages.map((webpage) => (
          <li key={webpage.id}>
            <Link href={Routes.ShowWebpagePage({ webpageId: webpage.id })}>
              <a>{webpage.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const WebpagesPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Webpages</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewWebpagePage()}>
            <a>Create Webpage</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <WebpagesList />
        </Suspense>
      </div>
    </>
  )
}

WebpagesPage.authenticate = true
WebpagesPage.getLayout = (page) => <Layout>{page}</Layout>

export default WebpagesPage
