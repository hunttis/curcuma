import { TourmericEvent } from "~/models/Events"
import { useCurcumaContext } from "~/app/curcuma-context"

export const Events = () => {
  const { events } = useCurcumaContext()

  console.log("Events", events)
  return (
    <>
      <h1>Events should be here</h1>
      <div className="columns is-multiline">
        {" "}
        {Object.entries(events).map(([id, event]: [string, TourmericEvent]) => (
          <div className="column is-one-third" key={id}>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{event.name}</p>
                    <p className="subtitle is-6">{event.category}</p>
                  </div>
                </div>
                <div className="content">
                  {event.date}
                  {/* Add more event properties as needed */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
