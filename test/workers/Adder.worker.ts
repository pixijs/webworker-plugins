interface MessageData
{
    a: number;
    b: number;
}

self.onmessage = (event: MessageEvent<MessageData>) =>
{
    const { a, b } = event.data;
    const c = a + b;

    self.postMessage(c);
};
