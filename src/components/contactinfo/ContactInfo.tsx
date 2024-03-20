import React from "react"
import { useCurcumaContext } from "~/app/curcuma-context"
import { OpeningHours, Settings } from "~/models/Settings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressBook,
  faDoorOpen,
  faEnvelope,
  faPhone,
  faSign,
} from "@fortawesome/free-solid-svg-icons"

const ContactInfo: React.FC = () => {
  const { settings } = useCurcumaContext()
  if (!settings) {
    return <div>Loading</div>
  }
  const { openingHours, location } = settings

  const sortedDays = settings.openingHours
    ? (Object.entries(settings.openingHours)
        .filter(([key, value]) => key !== "additionalinfo")
        .sort(([key, _value], [key2, _value2]) => {
          const days = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ]

          return days.indexOf(key) - days.indexOf(key2)
        }) as [keyof OpeningHours, string][])
    : []

  console.log("Sorted Days", sortedDays)

  return (
    <>
      <div className="section">
        <h1 className="title">contactinfo</h1>
        <div className="columns is-multiline">
          <div className="column is-6">
            {location?.phone && (
              <div className="box">
                <h2 className="subtitle">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  &nbsp;&nbsp; phone
                </h2>
                <div>
                  <a href={`tel:${location.phone}`}>{location.phone}</a>
                </div>
              </div>
            )}
            {location?.email && (
              <div className="box">
                <h2 className="subtitle">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  &nbsp;&nbsp; email
                </h2>
                <div>
                  <a href={`mailto:${location.email}`}>{location.email}</a>
                </div>
              </div>
            )}
          </div>
          <div className="column is-6">
            {location?.address && (
              <div className="box">
                <h2 className="subtitle">
                  <span className="icon">
                    <FontAwesomeIcon icon={faAddressBook} />
                  </span>
                  &nbsp;&nbsp; address
                </h2>
                {location.address.split("\n").map((line, index) => (
                  <div key={index}>{line}&nbsp;</div>
                ))}
              </div>
            )}
          </div>
          <div className="column is-6">
            <div className="box">
              <h2 className="subtitle">
                <FontAwesomeIcon icon={faDoorOpen} />
                &nbsp;&nbsp; regularopeninghours
              </h2>
              <table className="table">
                <tbody>
                  {Object.entries(sortedDays).map(([key, [day, value]]) => {
                    if (key !== "additionalinfo") {
                      return <OpeningHourRow day={day} value={value} key={day} />
                    }
                  })}
                </tbody>
              </table>
              {openingHours && openingHours.additionalinfo && (
                <div>{openingHours.additionalinfo}</div>
              )}
            </div>
          </div>
          {location?.directions && (
            <div className="column is-6">
              <div className="box">
                <h2 className="subtitle">
                  <FontAwesomeIcon icon={faSign} />
                  &nbsp;&nbsp; directions
                </h2>
                {settings.activeLocationImage && (
                  <div>
                    <a href={settings.activeLocationImage}>
                      <img alt="" className="image" src={settings.activeLocationImage} />
                    </a>
                  </div>
                )}
                <div>{location.directions}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactInfo

interface Props {
  day: keyof OpeningHours
  value: string
}

export const OpeningHourRow = ({ day, value }: Props) => {
  return (
    <tr>
      <td>
        <div>{day}</div>
      </td>
      <td>{value || "closed"}</td>
    </tr>
  )
}
