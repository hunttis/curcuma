import { TopMenu } from "../topmenu/TopMenu"
import { Columns, Notification } from "react-bulma-components"

export const MainView = () => {
  return (
    <div>
      <Columns>
        <div>
          <Notification color="warning">MainView</Notification>
        </div>
        <div>
          <Notification color="success">MainView</Notification>
        </div>
      </Columns>
      <div className="block">
        <TopMenu />
      </div>
    </div>
  )
}
