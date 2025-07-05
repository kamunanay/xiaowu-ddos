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

const 小吴随机=require(_0x小吴解码('0x0'));
const 小吴参数=process[_0x小吴解码('0x1')]['slice'](0x2);

if(小吴参数['length']<0x3){
    console[_0x小吴解码('0x2')](_0x小吴解码('0x3'));
    process[_0x小吴解码('0x4')](-0x1);
}

const 小吴网址=小吴参数[0x0];
const 小吴时间=parseInt(小吴参数[0x1]);
const 小吴速率=parseInt(小吴参数[0x2]);

console[_0x小吴解码('0x2')](`🔥 TCP SYN Flood: ${小吴网址} | Duration: ${小吴时间}s | Rate: ${小吴速率} packets/s`);

const 小吴间隔=setInterval(()=>{
    for(let 小吴i=0x0;小吴i<小吴速率;小吴i++){
        console[_0x小吴解码('0x2')](`📡 SYN Packet sent to ${小吴网址} with random seq=${小吴随机['generate'](0x8)}`);
    }
},0x3e8);

setTimeout(()=>{
    clearInterval(小吴间隔);
    console[_0x小吴解码('0x2')]("✅ TCP SYN Flood selesai!");
},小吴时间*0x3e8);