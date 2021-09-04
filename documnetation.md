## Secure Node
OWASP - detailed information about application security and threats.
owasp.org
Top 5 security threats
1. Injection attacks
2. Broken authentication
3. Senstiev data exposure
4. XML entities
5. Broken access control

JWT
header - payload - signature
Header - 2parts - algo and token type
signature - to prove who send

### security
Owasp NodeGoat Project
Look for Top 10
OWASP Dependecy-check

nodegoat.herokuapp.com

### cross site script
Adding code in form and then it gets executed.
The malicious code can added when cookies, session tokens or form input are accessed / read, it can be simple things like changing html or
security hazards like site redirect and so on.

<b> How to stop </b>
inputs and forms are sanitised and validated.

### DoS - denial of service
Attacks with long process times using complex regex, looping on login in creations and continuous engagement.

<b> How to stop </b>
inputs and forms are sanitized and validated.
npm express-rate-limit
` const limiter = new RateLimit({windowMs: 15*60*1000, max: 100, delaysMs: 0})`

### CSRUF
- forces a logged sessions on victims broswer
csurf on endpoint

### Cookies related
- ideally add some cookie options to keep them safe like expire, httpOptions, and so on
- use cookie-sesson npm if required.

### Server side injections
Injecting mailicous code into the server like code into Eval() and while (1)

<b> How to stop </b>
- inputs and forms are sanitized and validated.
- Never use eval, setTImeout or setInterval to parse inputs instead use the safer options like JSON.parse, parseXxx like parseInt()
- use strict

## Package Dependencies - good practises npm commands
npm audit
npm outdated
npm install <package>@version

- 2FA on npm account to publish and authorisation

## Data - good practises
use validator.js to valid the data before being saved / executed
use helmet to add good headers to secure your application against some attacks. Helmet adds 12 header protection
Use crypto to encrypt data
use session storage over local storage especially cookies and tokens

LetsEncrypt gives HTTPS certificate for free
