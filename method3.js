const 小吴随机 = require('randomstring');
const 小吴参数 = process.argv.slice(2);

if (小吴参数.length < 3) {
    console.log("Usage: node method3.js <url> <time> <rate>");
    process.exit(-1);
}

const 小吴网址 = 小吴参数[0], 小吴时间 = parseInt(小吴参数[1]), 小吴速率 = parseInt(小吴参数[2]);

console.log(`🔥 TCP SYN Flood ke ${小吴网址} selama ${小吴时间}s @ ${小吴速率} packet/s`);

const 小吴循环 = setInterval(() => {
    for (let 小吴i = 0; 小吴i < 小吴速率; 小吴i++) {
        console.log(`📡 SYN Packet ke ${小吴网址} seq=${小吴随机.generate(8)}`);
    }
}, 1000);

setTimeout(() => {
    clearInterval(小吴循环);
    console.log("✅ TCP SYN Flood 完成!");
}, 小吴时间 * 1000);
