function Button(props) {
  let { onClick, children } = props;
  return <>
    <button onClick={onClick}>{children}</button>
  </>
}

export default Button