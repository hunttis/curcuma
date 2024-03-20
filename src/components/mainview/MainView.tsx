import ContactInfo from "~/components/contactinfo/ContactInfo"
import EventCalendar from "~/components/events/EventCalendar"
import { Footer } from "~/components/footer/Footer"
import Today from "~/components/today/Today"
import { TopMenu } from "~/components/topmenu/TopMenu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import React, { useState } from "react"

export const MainView = () => {
  return (
    <Router>
      <section className="hero is-info is-fullwidth is-marginless is-paddingless">
        <div className="hero-body">
          <p className="title">Curcuma</p>
          <p className="subtitle">Curcuma is a new version of Tourmeric.</p>
        </div>
      </section>

      <div className="container">
        <TopMenu />
      </div>
      <section className="section">
        <Routes>
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/today" element={<Today />} />
          <Route path="/events" element={<EventCalendar />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  )
}
