import { BASEURL } from "@/lib/constants"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loading from "./Loading"
import ErrorPage from "./Error"
import PortfolioV1 from "./portfoilio_v1"
// import PortfolioV2 from "./portfolio_v2"
// import PortfolioV3 from "./portfolio_v3"

export default function Home(props: {
    domain: string
}) {
    const QuerData = useQuery({
        queryKey: ["name", props.domain],
        queryFn: async () => {
            const resp = await axios.get(`${BASEURL}/user/profile?domain=${props.domain}`)
            console.log(resp.data)
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
        if (QuerData.data.success == false) {
            return <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold text-gray-800">404</h1>
                <p className="text-gray-600">User not found</p>
                <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to home</a>
            </div>
        }
        if (QuerData.data.data.style == null) {
            return <PortfolioV1 user={QuerData.data.data} />
        }
        else if (QuerData.data.data.style.name == null) {
            <PortfolioV1 user={QuerData.data.data} />
        }
    }



}