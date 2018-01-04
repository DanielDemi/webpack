module.exports = {
  /* 反馈状态 */
  type: {
    success: 'success:  ',
    error: 'error:  '
  },

  /* 反馈信息 */
  message: {

    fileWriteSuccess: '文件写入成功!',
    
    startJsonToExcel : '正在初始化json文件...',
    startLoadlang : '正在获取开发态多语言...',
    failLoadlang : '获取语言失败',

    excelComplete : '多语言静态资源创建成功'

  },


  /* EXCEL数据 */
  excel: {
    caption: [              // excel表头内容
      'Resource (来源)',
      'Key (关键信息)', 
      'Version (版本)',
      'Length (长度)',
      'Position (位置)',
      'Remark (备注)',
      '0_中文 (Simplified Chinese -简体中文)', 
      '1_English (English-英文)',
      '2_Русский (Russian-俄语)',
      '3_Eesti (Estonian-爱沙尼亚语)',
      '4_Български (Bulgarian-保加利亚语)',
      '5_Magyar (Hungarian-匈牙利语)',
      '6_Ελληνικά (Greek-希腊语)',
      '7_Deutsch (German-德语)',
      '8_Italiano (Italian-意大利语)',
      '9_Český (Czech-捷克语)',
      '10_Slovensko (Slovak-斯洛伐克语)',
      '11_Français (France-法语)',
      '12_Polski (Polish-波兰语)',
      '13_Nederlands (Dutch-荷兰语)',
      '14_Português (Portuguese-葡萄牙语)',
      '15_Español (Spanish-西班牙语)',
      '16_Român (Romanian-罗马尼亚语)',
      '17_Dansk (Danish-丹麦语)',
      '18_Svenska (Swedish-瑞典语)',
      '19_Norsk (Norwegian-挪威语)',
      '20_Suomi (Finnish-芬兰语)',
      '21_Hrvatski (Croatian-克罗地亚语)',
      '22_Slovenščina (Slovenian-斯洛文尼亚语)',
      '23_Srpski (Serbian-塞尔维亚语)',
      '24_Türkçe (Turkish-土耳其语)',
      '25_한국어 (Korean-韩语)',
      '26_繁體中文 (Traditional Chinese-繁体中文)',
      '27_ภาษาไทย (Thai-泰语)',
      '28_Tiếng Việt (Vietnamese-越南语)',
      '29_日本語 (Japanese-日语)',
      '30_עברית שפה (Hebrew-希伯来语)', 
      '31_Latvijas (Latvian-拉脱维亚语)',
      '32_lietuviešu (Lithuanian-立陶宛语)',
      '33_Português - BRAZIL(Brazilian Portuguese-巴西葡萄牙语 )',
      '34_العربية(Arabic-阿拉伯语)',
      '35_فارسی(Persian-波斯语)'
    ]
  },

  /* 表格行数据的属性值列表 */
  tableRowKey : [               
    'resource',                       // Resource (来源)      
    'key',                            // Key (关键信息)
    'version',                        // Version (版本)
    'length',                         // Length (长度)
    'position',                       // Position (位置)  
    'remark',                         // Remark (备注)
    'chinese',                        // 0_中文 (Simplified Chinese -简体中文)
    'english',                        // 1_English (English-英文)
    'russian',                        // 2_Русский (Russian-俄语)
    'estonia',                        // 3_Eesti (Estonian-爱沙尼亚语)
    'bulgarian',                      // 4_Български (Bulgarian-保加利亚语)
    'hungarian',                      // 5_Magyar (Hungarian-匈牙利语)
    'greek',                          // 6_Ελληνικά (Greek-希腊语)
    'german',                         // 7_Deutsch (German-德语)
    'italian',                        // 8_Italiano (Italian-意大利语)
    'czech',                          // 9_Český (Czech-捷克语)
    'slovak',                         // 10_Slovensko (Slovak-斯洛伐克语)
    'france',                         // 11_Français (France-法语)
    'polish',                         // 12_Polski (Polish-波兰语)
    'dutch',                          // 13_Nederlands (Dutch-荷兰语)
    'portuguese',                     // 14_Português (Portuguese-葡萄牙语)
    'spanish',                        // 15_Español (Spanish-西班牙语)
    'romanian',                       // 16_Român (Romanian-罗马尼亚语)
    'danish',                         // 17_Dansk (Danish-丹麦语)
    'swedish',                        // 18_Svenska (Swedish-瑞典语)
    'norwegian',                      // 19_Norsk (Norwegian-挪威语)
    'finnish',                        // 20_Suomi (Finnish-芬兰语)
    'croatian',                       // 21_Hrvatski (Croatian-克罗地亚语)
    'slovenian',                      // 22_Slovenščina (Slovenian-斯洛文尼亚语)
    'serbian',                        // 23_Srpski (Serbian-塞尔维亚语)
    'turkish',                        // 24_Türkçe (Turkish-土耳其语)
    'korean',                         // 25_한국어 (Korean-韩语)
    'traditionalChinese',             // 26_繁體中文 (Traditional Chinese-繁体中文)
    'thai',                           // 27_ภาษาไทย (Thai-泰语)
    'vietnamese',                     // 28_Tiếng Việt (Vietnamese-越南语)
    'japanese',                       // 29_日本語 (Japanese-日语)
    'hebrew',                         // 30_עברית שפה (Hebrew-希伯来语)
    'latvian',                        // 31_Latvijas (Latvian-拉脱维亚语)
    'lithuanian',                     // 32_lietuviešu (Lithuanian-立陶宛语)
    'brazilianPortuguese',            // 33_Português - BRAZIL(Brazilian Portuguese-巴西葡萄牙语 )
    'arabic',                         // 34_العربية(Arabic-阿拉伯语)
    'persian'                         // 35_فارسی(Persian-波斯语)
  ],

  /* 语言属性对应的文件名称(语言简写) */
  languageFileName: {
    'chinese' :       'zh_CN',                        
    'english' :       'en_US',
    
    'russian' :       'ru',                        
    'estonia' :       'et',                       
    'bulgarian':      'bg',                     
    'hungarian':      'hu',                     
    'greek':          'el',                      
    'german':         'de',                         
    'italian':        'it',                       
    'czech':          'cs',                        
    'slovak':         'sk',                       
    'france':         'fr',                         
    'polish':         'pl',                        
    'dutch':          'nl',                          
    'portuguese':     'pt',                  
    'spanish':        'es',                      
    'romanian':       'ro',                      
    'danish':         'da',                        
    'swedish':        'sv',                      
    'norwegian':      'no',                     
    'finnish':        'fi',                      
    'croatian':       'hr',                      
    'slovenian':      'sl',                    
    'serbian':        'sr',                       
    'turkish':        'tr',                        
    'korean':         'ko',                         
    'traditionalChinese': 'zh_HK',      // zh_TW          
    'thai':               'th',                           
    'vietnamese':         'vi',                    
    'japanese':           'ja',                    
    'hebrew':             'he',                         
    'latvian':            'lv',                       
    'lithuanian':         'lt',                    
    'brazilianPortuguese':'pt_BR',            
    'arabic':             'ar',         // 阿拉伯语                        
    'persian':            'fa'                         
  }
}  