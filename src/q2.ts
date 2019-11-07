// 題目說明: 請使用套件readline-sync跟node-qrcode，輸入文字來產生QRCODE
// 輸入說明: 請打上任意文字，並產生QRCODE

import * as readlineSync from 'readline-sync';
import * as QRCode from 'qrcode';

var userName = readlineSync.question('May I have your name? ');
QRCode.toFile('./QRCODE.png', userName);
