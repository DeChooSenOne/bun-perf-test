import { serve } from "bun";

// CPU-bound task function
function fib(n : number) : number {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

serve({
    port: 3001,
    async fetch(req) {
        if (new URL(req.url).pathname === "/cpu-intensive") {
            const result = fib(50);
            return new Response(`CPU-intensive Result: ${result}`);
        } else if (new URL(req.url).pathname === "/io-intensive") {
            const filePath = './data.txt';
            Bun.write(filePath, 'This is a test file.');
            const content = await Bun.file(filePath).text();
            return new Response(`I/O-intensive File content: ${content}`);
        }
        return new Response("Not Found", {status: 404});
    },
});