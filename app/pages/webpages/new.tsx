import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createWebpage from "app/admin/webpages/mutations/createWebpage"
import { WebpageForm, FORM_ERROR } from "app/admin/webpages/components/WebpageForm"

const NewWebpagePage: BlitzPage = () => {
  const router = useRouter()
  const [createWebpageMutation] = useMutation(createWebpage)

  return (
    <div>
      <h1>Create New Webpage</h1>

      <WebpageForm
        submitText="Create Webpage"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateWebpage}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const webpage = await createWebpageMutation(values)
            router.push(Routes.ShowWebpagePage({ webpageId: webpage.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.WebpagesPage()}>
          <a>Webpages</a>
        </Link>
      </p>
    </div>
  )
}

NewWebpagePage.authenticate = true
NewWebpagePage.getLayout = (page) => <Layout title={"Create New Webpage"}>{page}</Layout>

export default NewWebpagePage
