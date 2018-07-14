import Noty from 'noty'

import './noti.css'
import './noti.theme.css'

export function notify(text, options = {}) {
  const noty = new Noty({
    theme: 'axi',
    layout: 'bottomRight',
    text,
    progressBar: true,
    closeWith: ['click'],
    ...options,
  }).show()

  return noty
}

const createNoti = type => (text, timeout = 1200, options) => {
  return notify(text, {type, timeout, ...options})
}

export const alert = createNoti('alert')
export const success = createNoti('success')
export const warn = createNoti('warning')
export const error = createNoti('error')
export const info = createNoti('info')

export default {alert, success, warn, error, info}
