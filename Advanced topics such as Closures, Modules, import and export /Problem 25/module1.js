import { getMessageB } from './module2.js';

export const messageA = "Hello from Module A";

export function getMessageA() {
    return "Hello from Module1";
}

export function helloFromA() {
    console.log(`${getMessageB()}`);
}
