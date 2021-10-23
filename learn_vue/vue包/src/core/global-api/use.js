/* @flow */

import { toArray } from '../util/index'

export function initUse(Vue) {
  Vue.use = function (plugin) {
    //installedPlugins 存储的是已经安装过的插件的集合
    // this ---》 Vue
    //  把这个集合存储到了 Vue的一个静态属性（_installedPlugins）上
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
