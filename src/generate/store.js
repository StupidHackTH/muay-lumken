import {observable} from 'mobx'

class MagicStore {
  @observable number = '0000000000'
}

export default new MagicStore()
