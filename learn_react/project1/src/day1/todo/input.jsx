function Input(props) {
  let { value, onChange, onKeyDown } = props;
  return <>
    自己的input <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />
    <input type="text" {...props} />
    {/* {...props}  类似于 vue的  v-bind='$attrs' */}
  </>
}

export default Input