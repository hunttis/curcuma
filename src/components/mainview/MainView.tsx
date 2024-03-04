import { TopMenu } from "../topmenu/TopMenu"
import { ContentView } from "../content/ContentView"
import { Footer } from "../footer/Footer"

export const MainView = () => {
  return (
    <div className="container">
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Curcuma</p>
          <p className="subtitle">Curcuma is a new version of Tourmeric.</p>
        </div>
      </section>

      <div className="container">
        <TopMenu />
      </div>
      <section className="section">
        <ContentView />
      </section>
      <Footer />
    </div>
  )
}
