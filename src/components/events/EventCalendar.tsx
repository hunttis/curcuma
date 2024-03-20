import React, { useState } from "react"
import { TourmericEvent } from "~/models/Events"
import {
  startOfMonth,
  endOfMonth,
  eachWeekOfInterval,
  format,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  getMonth,
} from "date-fns"
import { useCurcumaContext } from "~/app/curcuma-context"

const EventCalendar: React.FC = () => {
  const { events, categories } = useCurcumaContext()

  const [currentDate, setCurrentDate] = useState(new Date())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState("")

  const toggleModal = (day: string) => {
    if (day) {
      setSelectedDay(day)
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
  }

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  if (
    (events && Object.entries(events).length < 1) ||
    (categories && Object.entries(categories).length < 1)
  ) {
    return <div>Loading</div>
  }

  const renderCalendar = (): JSX.Element[] => {
    const startMonth: Date = startOfMonth(currentDate)
    const endMonth: Date = endOfMonth(currentDate)
    const weeks: Date[] = eachWeekOfInterval({
      start: startMonth,
      end: endMonth,
    })

    return weeks.map((weekStart: Date, index: number) => {
      const weekEnd = endOfWeek(weekStart)
      const daysOfWeek = eachDayOfInterval({ start: weekStart, end: weekEnd })
      return (
        <div key={index} className="columns">
          {renderDaysForWeek(daysOfWeek)}
          {isModalOpen && (
            <div className="modal is-active">
              <div
                className="modal-background is-transparent"
                onClick={() => toggleModal("")}
              ></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Modal title</p>
                  <button
                    className="delete"
                    aria-label="close"
                    onClick={() => toggleModal("")}
                  ></button>
                </header>
                <section className="modal-card-body">
                  {/* Modal content */}
                  FOO
                </section>
                <footer className="modal-card-foot">
                  <button className="button" onClick={() => toggleModal("")}>
                    Close
                  </button>
                </footer>
              </div>
            </div>
          )}
        </div>
      )
    })
  }

  const renderDaysForWeek = (week: Date[]): JSX.Element[] => {
    return week.map((day: Date) => {
      if (getMonth(day) !== getMonth(currentDate)) {
        return (
          <div
            key={format(day, "yyyy-MM-dd")}
            className="column is-one-seventh is-paddingless is-marginless is-invisible"
          >
            <div className="card"></div>
          </div>
        )
      }
      return (
        <div
          key={format(day, "yyyy-MM-dd")}
          className="column is-one-seventh is-paddingless is-marginless"
          onClick={() => toggleModal(format(day, "yyyy-MM-dd"))}
        >
          <div className="card">
            <div className="card-content">
              <p className="">{format(day, "dd.MM.")}</p>
              <div className="content">{renderEventsForDay(day)}</div>
            </div>
          </div>
        </div>
      )
    })
  }

  const renderEventsForDay = (day: Date): JSX.Element => {
    const formattedDay = format(day, "yyyy-MM-dd")
    const dayEvents: [string, TourmericEvent][] = Object.entries(events)
      .filter(([key, event]) => {
        return event.date
      })
      .filter(([key, event]) => {
        return format(event.date, "yyyy-MM-dd") === formattedDay
      })

    return (
      <div className="columns">
        {dayEvents.map(([key, event]: [string, TourmericEvent]) => {
          const eventCategory = categories[event.category]
          const eventLogo = eventCategory.imageSmall
            ? eventCategory.imageSmall
            : eventCategory.image
          console.log(eventLogo)
          return (
            <div key={key} className="column">
              <div key={`event-img-${key}`}>
                <img
                  className="image is-24x24 is-rounded calendar-image ongoing-event-image"
                  src={eventLogo!}
                  alt=""
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="title">Event Calendar - {format(currentDate, "MMMM, yyyy")}</h1>
      <button className="button is-info" onClick={prevMonth}>
        Previous Month
      </button>
      <button className="button is-primary" onClick={nextMonth}>
        Next Month
      </button>

      {renderCalendar()}
    </div>
  )
}

export default EventCalendar
