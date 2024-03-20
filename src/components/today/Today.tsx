import { format } from "date-fns"
import React from "react"
import { useCurcumaContext } from "~/app/curcuma-context"

const Today: React.FC = () => {
  const { events } = useCurcumaContext()

  const today = format(new Date(), "yyyy-MM-dd")
  const eventsForToday = Object.entries(events).filter(([key, event]) => event.date === today)
  return (
    <div>
      <div>Events for Today</div>
      {eventsForToday.map(([key, event]) => (
        <div key={key} className="card">
          <div className="card-content">
            <div className="content">
              <p>{event.name}</p>
              <p>{event.notes}</p>
              <p>{event.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Today
