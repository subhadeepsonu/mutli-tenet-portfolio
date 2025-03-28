import { BASEURL } from "@/lib/constants"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loading from "./Loading"
import ErrorPage from "./Error"
import PortfolioV1 from "./portfoilio_v1"
import PortfolioV2 from "./portfolio_v2"
import PortfolioV3 from "./portfolio_v3"
export default function Home(props: {
    domain: string
}) {
    const QuerData = useQuery({
        queryKey: ["name", props.domain],
        queryFn: async () => {
            const resp = await axios.get(`${BASEURL}/user/profile?domain=${props.domain}`)
            return resp.data
        }
    })
    if (QuerData.isLoading) {
        return <Loading />
    }
    if (QuerData.isError) {
        return <ErrorPage />
    }
    if (QuerData.data) {
        if (QuerData.data.data.style == null) {
            return <PortfolioV3 user={QuerData.data.data} />
        }
        else if (QuerData.data.data.style.name == null) {
            <PortfolioV1 user={QuerData.data.data} />
        }
    }



}