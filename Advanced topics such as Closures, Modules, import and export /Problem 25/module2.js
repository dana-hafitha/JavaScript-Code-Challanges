import { getMessageA } from './module1.js';

export const messageB = "Hello from Module2";

export function getMessageB() {
    return messageB;
}

export function helloFromB() {
    console.log(`${getMessageA()}`);
}
