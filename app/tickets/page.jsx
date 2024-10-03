import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h1>Brands</h1>
          <p><small>Looking for a brand.</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
