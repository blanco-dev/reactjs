const Alert = ({type, children}) => {
  return (
    <div className={`alert alert-${type} text-center`}>{children}</div>
  )
}

export default Alert