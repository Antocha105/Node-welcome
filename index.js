'use strict'

/*
require(part)

resolving -> loading ->wrappening -> evaluation -> caching





*/


const fs = require('fs').promises 

fs.readFile('./text.txt', 'utf-8')
.then(content=>{
    const newContent = `APPEND Old content: ${content} and new content: 'Hello world'`;
    //fs.writeFile('./newFile.txt', newContent, 'utf8')   //Перезаписує файли

    fs.appendFile('./newFile.txt',newContent, 'utf8') //Дописує файли
})