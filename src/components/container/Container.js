

function Container({children,className,...item}) {
  return (
    <div className={`py-20  min-h-screen ${className}` } {...item} >{children}</div>
  )
}

export default Container