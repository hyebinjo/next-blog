import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CartDateSlug() {
    const router = useRouter()
    const {date} = router.query
  return (
      <>
        <h1 className="title">Cart Date Slug {JSON.stringify(date)}</h1>
        <Link href="/cart/2022/06/05">20220605로</Link>
        <button onClick={()=> router.push('./cart/2022/06/05')}>20220605로</button>
      </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}