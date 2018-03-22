import Layout from '../components/layout'

const Dynamic = (props) => (
    <Layout>
        <div>I hope this page can show all query.</div>
        <div>{props.url.query.name}</div>
    </Layout>
)

export default Dynamic