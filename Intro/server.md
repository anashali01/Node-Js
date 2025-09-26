
---

# Node.js Simple Server

A Node.js server is a simple program that listens for requests (like someone visiting a website or making an API call) and sends back responses (like a web page, data, or a message) using JavaScript code that runs outside the browser.

## 📝 Simple Explanation

- Node.js lets you use JavaScript to build a server, so the same language works both in the browser and on the backend.
- The server "sits" on your computer or a remote machine and waits for people to connect over the internet (for example, using a browser).
- When someone connects, the server gets the request, processes it, and responds—usually by sending back some data, like a web page or JSON.[5]

## ⚙️ How Does a Node.js Server Work?

- Uses the built-in HTTP module to handle requests and responses.
- Works in an event-driven, non-blocking way, so it can handle many requests quickly and efficiently.[5]
- Here is a simple code example you can use:

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");
```

This simple server listens on port 8080 and sends "Hello World!" whenever someone connects.[6]

## 🚀 How to Run

1. Make sure Node.js is installed.
2. Save the above code as `server.js` in your project folder.
3. Open a terminal, navigate to this folder, and run:
   ```
   node server.js
   ```
4. Open your browser and visit [http://localhost:8080](http://localhost:8080). You’ll see "Hello World!" displayed.

## 💡 Why Use Node.js Servers?

- Very fast and lightweight—ideal for real-time apps like chats, dashboards, or APIs.[5]
- Easy to scale for bigger projects.
- You can use the same language (JavaScript) for both frontend and backend, making it simple for developers.[3][5]

## 📚 Summary

In short, a Node.js server is just a JavaScript program running on the backend, ready to handle internet requests and send back information.[6][3][5]

---

