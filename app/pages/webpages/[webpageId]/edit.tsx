import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getWebpage from "app/admin/webpages/queries/getWebpage"
import updateWebpage from "app/admin/webpages/mutations/updateWebpage"
import { WebpageForm, FORM_ERROR } from "app/admin/webpages/components/WebpageForm"

export const EditWebpage = () => {
  const router = useRouter()
  const webpageId = useParam("webpageId", "number")
  const [webpage, { setQueryData }] = useQuery(
    getWebpage,
    { id: webpageId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateWebpageMutation] = useMutation(updateWebpage)

  return (
    <>
      <Head>
        <title>Edit Webpage {webpage.id}</title>
      </Head>

      <div>
        <h1>Edit Webpage {webpage.id}</h1>
        <pre>{JSON.stringify(webpage, null, 2)}</pre>

        <WebpageForm
          submitText="Update Webpage"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateWebpage}
          initialValues={webpage}
          onSubmit={async (values) => {
            try {
              const updated = await updateWebpageMutation({
                id: webpage.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowWebpagePage({ webpageId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditWebpagePage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditWebpage />
      </Suspense>

      <p>
        <Link href={Routes.WebpagesPage()}>
          <a>Webpages</a>
        </Link>
      </p>
    </div>
  )
}

EditWebpagePage.authenticate = true
EditWebpagePage.getLayout = (page) => <Layout>{page}</Layout>

export default EditWebpagePage
