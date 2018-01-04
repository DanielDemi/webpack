/*
 * @Author: xiangxiao3 
 * @Date: 2017-12-30 13:46:17 
 * @Desc: 多语言文件转换 excel to json
 * @Last Modified by: xiangxiao3
 * @Last Modified time: 2018-01-02 17:05:32
 */
const xlsx = require('node-xlsx')
const fs = require('fs')
const path = require('path')

const con = require('./config')

excelToJson()


function excelToJson(){
  // 获取文件
  let excel = findExcel()

  //验证文件的正确性 并 获取语言对象
  let excelData = testExcel(excel)

  //对象转换
  let jsonData = transformData(excelData)

  // 翻译成JSON并输出到文件
  createJson()
}

/** 
 * javascript comment 
 * @Author: xiangxiao3 
 * @Date: 2018-01-02 15:03:00 
 * @Desc:  获取文件
 */
function findExcel(){
  const filePath = path.resolve(__dirname, '../../src/i18n/language.xlsx')
  const file = fs.readFileSync(filePath)

  return file
}
/** 
 * javascript comment 
 * @Author: xiangxiao3 
 * @Date: 2018-01-02 15:11:46 
 * @Desc:  验证文件的正确性 并 获取语言对象
 */
function testExcel(file){
  return xlsx.parse(file)
}

/** 
 * javascript comment 
 * @Author: xiangxiao3 
 * @Date: 2018-01-02 15:29:50 
 * @Desc: excel 数据 转化成 json 数据 
 */
function transformData(excelData){
  let jsonData = {}
  // 遍历sheet页
  for (let la of excelData){
    let rows = la.data.splice(1)

    // 遍历行
    for (let row of rows){
      // 数据填充
      extension(row, jsonData)
    }
  }
  
  let i18nPath = path.join(__dirname, `../../static/i18n`)

  /* 删除i18n文件夹以及子文件 */
  delDir(i18nPath)
  /*  创建i18n文件夹 */
  fs.mkdirSync(i18nPath)

  /* 4. 将语言信息写入各个json文件 */
  for(let key of Object.keys(jsonData)) {
    /*  创建语言文件夹 */
    fs.mkdirSync(path.join(i18nPath, `${key}`))

    let languagePath = path.join(i18nPath, `${key}/index.json`)

    fs.appendFileSync(languagePath, JSON.stringify(jsonData[key]))
    console.log( languagePath )
  }
}

/** 
 * javascript comment 
 * @Author: xiangxiao3 
 * @Date: 2018-01-02 15:56:51 
 * @Desc: 扩展语言对象 
 */
function extension(row, jsonData){
  let cellkey = row[1]
  for(let i = 5 ; i < row.length; i ++){
    if(row[i].trim() !== ""){
      setData(con.languageFileName[con.tableRowKey[i]], cellkey, jsonData, row[i])
    }
  }
}

function setData(lang, cellkey, jsonData, value){
  let keys = (lang + "." + cellkey).split(".")

  setObjValue(jsonData, keys, value)
}

/**
 * author:  zhuxiankang
 * data:    2017/11/27
 * desc:    空对象监测并赋值（空值）
 */
function setObjValue(obj, keys, value){
  let key = keys[0]
  keys = keys.splice(1)

  if(!obj[key]){
    obj[key] = keys.length > 0 ? {} : value
  }

  if(keys.length > 0){
    setObjValue(obj[key], keys, value)
  }
}

function createJson(){

}
/**
 * author:  zhuxiankang
 * data:    2017/11/25
 * desc:    删除用户文件夹以及文件夹下的所有文件
 * parm:    req -> http请求对象
 *          path -> 需要删除的文件夹路径
 *          isDelUser -> 是否删除当前用户文件夹
 */
function delDir(path, isDelUser) {
  let files = []
  if(fs.existsSync(path)) {
    files = fs.readdirSync(path)
    for(let file of files) {
      let curPath = `${path}/${file}`
      if(fs.statSync(curPath).isDirectory()) {
        delDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    }
    fs.rmdirSync(path)
  }
}