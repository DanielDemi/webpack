import fs from 'fs'
import path from 'path'

class Tools {
  constructor () {
    this.langs = {}
  }

  /**
   * @Author: zhuxiankang
   * @Date:   2017-12-14 15:48:41
   * @Desc:   多语言工具初始化
   * @Parm:
   */
  init () {
    console.log('正在初始化多语言静态资源...\n')
    const i18nStaticPath = path.resolve(__dirname, '../static/i18n')
    this.delI18nStaticDir(i18nStaticPath)
    fs.mkdirSync(i18nStaticPath)
    this.langs = {}
  }

  /**
   * @Author: zhuxiankang
   * @Date:   2017-12-14 15:53:16
   * @Desc:   获取开发态的i18n
   * @Parm:
   */
  getI18nDev () {
    console.log('正在获取开发态多语言...\n')
    const i18nDevPath = path.resolve(__dirname, '../src/i18n')
    const files = fs.readdirSync(i18nDevPath)
    for (let file of files) {
      let filePath = path.resolve(i18nDevPath, file)
      if (!fs.statSync(filePath).isDirectory()) continue
      const lang = require(filePath)
      if (!lang) continue
      this.langs[file] = lang
    }
  }

  /**
   * @Author: zhuxiankang
   * @Date:   2017-12-14 16:10:08
   * @Desc:   创建i18n静态资源
   * @Parm:
   */
  setI18nStatic () {
    const i18nStaticPath = path.resolve(__dirname, '../static/i18n')

    for (let lang of Object.keys(this.langs)) {
      let langDirPath = path.join(i18nStaticPath, lang)
      fs.mkdirSync(langDirPath)
      fs.writeFileSync(`${langDirPath}/README.md`, '')

      try {
        fs.writeFileSync(`${langDirPath}/index.json`, JSON.stringify(this.langs[lang]))
      } catch (err) {
        console.log(err)
      }
    }

    console.log('多语言静态资源创建成功！\n')
  }

  /**
   * @Author: zhuxiankang
   * @Date:   2017-12-14 15:43:07
   * @Desc:   删除旧的i18n静态资源
   * @Parm:
   */
  delI18nStaticDir (path) {
    let files = []
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path)
      for (let file of files) {
        let curPath = `${path}/${file}`
        if (fs.statSync(curPath).isDirectory()) {
          this.delI18nStaticDir(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      }
      fs.rmdirSync(path)
    }
  }
}

const tools = new Tools()
tools.init()
tools.getI18nDev()
tools.setI18nStatic()
