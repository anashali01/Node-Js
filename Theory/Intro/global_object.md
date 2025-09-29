Node.js – The Global Object
In Node.js, the global object is called global. It’s similar to the window object in browsers and provides a space where you can store variables, functions, or use built-in Node.js features from anywhere in your application—without needing to import or require them.

Key Points
global is always available—no import needed.

Variables or functions you add to global can be accessed in any file of your app.

Node.js also provides other global objects like console, process, and setTimeout.

Example
js
global.appName = "NodeApp";
console.log(global.appName); // "NodeApp"
You can access appName from anywhere in your Node.js app.

Common Node.js Global Objects
global – The main global object in Node.js.

console – For printing logs, errors, and messages.

process – Gives info and control over the running Node.js process (like environment variables, command-line arguments, etc.).

Buffer – Handles binary data.

setTimeout / setInterval – Run code after delays.

Good Practices
Only use the global object for truly global values (like app configuration) to avoid confusion and bugs.

Try to keep the global scope clean for better, safer code.

__filename and __dirname
__filename: The absolute path to the currently executing JavaScript file.

__dirname: The absolute path to the directory containing the currently executing file.

They help you work with files and directories, especially when building paths or loading files.

Example:

js
console.log('Directory name:', __dirname);   // e.g. /Users/dev/myproject
console.log('File name:', __filename);       // e.g. /Users/dev/myproject/app.js
Use __dirname to get the folder location.

Use __filename to get the current file’s location.

Creating a path to another file:

js
const path = require('path');
const dataPath = path.join(__dirname, 'data', 'info.json');
console.log('Path to info.json:', dataPath);
This builds a platform-independent path to the info.json file inside a data folder.

setTimeout and setInterval
Node.js includes timers for running functions after a delay or at regular intervals.

setTimeout
Runs a function once after a specified delay (in milliseconds).

Example:

js
setTimeout(() => {
  console.log('This prints after 2 seconds');
}, 2000);
setInterval
Runs a function repeatedly at a specified interval (in milliseconds).

Example:

js
let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log('Interval count:', count);
  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 times
  }
}, 1000);
setTimeout is for one-time delays.

setInterval is for repeating actions; use clearInterval() to stop it.