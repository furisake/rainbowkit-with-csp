# Rainbowkit with the CSP header

## Overview
RainbowKit has a CSP issue where it doesn't provide a way to add a nonce or a hash to its inline styles.  
See: [[bug] RainbowKit CSS styling not loading when using 'self' in Content Security Policy on Vercel #1256](https://github.com/rainbow-me/rainbowkit/issues/1256#issuecomment-1557582690)  

If a CSP header is included like style-src 'self' 'nonce-...';, a rendering error occurs:
```
Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'self' 'nonce-Yzc4MDVmYjEtNWRiNy00YjQwLTg3OWMtYWU4MGVkMjI0ODI1'". Either the 'unsafe-inline' keyword, a hash ('sha256-digGk6H6raFg2+m4OcOSDWeN38nmFsnOhvmQFGrkZAo='), or a nonce ('nonce-...') is required to enable inline execution.
```

The workaround in a Next.js project is to allow unsafe-inline, but has XSS risks.

## Getting Started
### 1. Clone Repository
```
git clone https://github.com/furisake/rainbowkit-with-csp.git
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Server
```
npm run build
npm start
```
⚠️`npm dev` should not be used since the webpack dev-tools violate the CSP header

### 4. Check Errors in your Browser
