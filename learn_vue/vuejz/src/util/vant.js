
import {
  Button, Icon, NavBar, Form, Field, CellGroup, ActionSheet, DatetimePicker,
  Popup, NumberKeyboard
} from 'vant';
let list = [Button, Icon, NavBar, Form, Field, CellGroup, ActionSheet, DatetimePicker,
  Popup, NumberKeyboard]

function useVant(app) {
  list.forEach(item => {
    app.use(item)
  })
}
export default useVant