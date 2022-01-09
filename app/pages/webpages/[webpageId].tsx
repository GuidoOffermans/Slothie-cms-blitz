import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getWebpage from "app/admin/webpages/queries/getWebpage"
import deleteWebpage from "app/admin/webpages/mutations/deleteWebpage"

export const Webpage = () => {
  const router = useRouter()
  const webpageId = useParam("webpageId", "number")
  const [deleteWebpageMutation] = useMutation(deleteWebpage)
  const [webpage] = useQuery(getWebpage, { id: webpageId })

  return (
    <>
      <Head>
        <title>Webpage {webpage.id}</title>
      </Head>

      <div>
        <h1>Webpage {webpage.id}</h1>
        <pre>{JSON.stringify(webpage, null, 2)}</pre>

        <Link href={Routes.EditWebpagePage({ webpageId: webpage.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteWebpageMutation({ id: webpage.id })
              router.push(Routes.WebpagesPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowWebpagePage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.WebpagesPage()}>
          <a>Webpages</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Webpage />
      </Suspense>
    </div>
  )
}

ShowWebpagePage.authenticate = true
ShowWebpagePage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowWebpagePage
