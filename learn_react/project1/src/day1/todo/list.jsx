import Button from './button'
function List(props) {
  let { data = [], onDel, www } = props
  return <>
    <ul>
      {
        data.map(item => {
          return <li key={item.id}  >
            {
              www ?
                www(item) :
                <span>
                  {item.text}
                  <Button onClick={() => { onDel(item) }}>X</Button>
                </span>

            }
          </li>
        })
      }
    </ul>
  </>
}

export default List