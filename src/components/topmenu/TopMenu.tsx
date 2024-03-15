export const TopMenu = () => {
  const items = [{ name: "Item1" }, { name: "Item2" }]

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">Logo</div>
        <div className="navbar-start">
          {items.map(item => {
            return (
              <div key={item.name}>
                <a className="navbar-item">{item.name}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
