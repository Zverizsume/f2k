import Layout from "../components/layout"
import PartnerForm from "../components/PartnershipComponents/partnerForm"
import Title from "../components/title"

const page = {
    title : 'Partnership',
    desc : 'Become a partner.',
    canonical: 'https://f2k.gg/partnership'
}

export default function Partnership() {
    return (
        <Layout page = {page} scrolled = {true}>
            <Title title = 'become a partner' /> 
            <PartnerForm />
        </Layout>
    )
}