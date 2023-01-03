import HomePage from "../components/client/HomePage"
import Layout from "../components/server/layout"


export default async function Page() {
    return (
        <Layout home={true}>
            <HomePage/>
        </Layout>
    )
        
}