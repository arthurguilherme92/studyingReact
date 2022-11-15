const Container = ({children, MyValue}) => {
  return (
    <div>
        <h1>Container</h1>
        {children}
        {MyValue}
    </div>
  )
}

export default Container