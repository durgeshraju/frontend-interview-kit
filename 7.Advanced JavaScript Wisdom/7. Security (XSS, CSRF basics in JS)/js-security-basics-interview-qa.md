
# 🛡️ JavaScript Security Basics – Interview Q&A (XSS, CSRF)

This section provides a beginner-to-advanced guide to security concerns in JavaScript, with an emphasis on interview-oriented understanding.

---

## 📌 What is Cross-Site Scripting (XSS)?

**XSS** is a security vulnerability that allows attackers to inject malicious scripts into content from otherwise trusted websites.

### 🧠 Mental Hook:
> "XSS is like someone writing malicious notes on your whiteboard – if you blindly read them aloud, you spread the attack."

### ✅ Example:
```html
<!-- Unsafe user input directly embedded into DOM -->
<div id="output"></div>
<script>
  const userInput = "<img src=x onerror=alert('XSS')>";
  document.getElementById("output").innerHTML = userInput; // vulnerable
</script>
```

### ✅ How to Prevent:
- Use `textContent` instead of `innerHTML`
- Sanitize inputs with libraries like DOMPurify
- Enable CSP (Content Security Policy)

---

## 📌 What is CSRF (Cross-Site Request Forgery)?

**CSRF** tricks the victim into submitting a request that they didn’t intend to send.

### 🧠 Mental Hook:
> "CSRF is like someone forging your signature on a bank form – it abuses your trust/session."

### ✅ Real World Scenario:
A user is logged into their bank account. A malicious website submits a hidden form to transfer money.

### ✅ How to Prevent:
- Use CSRF tokens
- SameSite cookie attribute (`SameSite=Strict`)
- Use `POST` over `GET` for state-changing operations

---

## ❓ Interview Question: How would you prevent XSS in a React app?
### ✅ Answer:
React escapes content by default. Avoid `dangerouslySetInnerHTML` unless necessary and sanitize input when doing so.

---

## ❓ Interview Question: What are some real-world consequences of XSS?
- Session hijacking
- Credential theft
- Malicious redirection

---

## 🔐 Summary
| Attack | What It Does | Prevention |
|--------|---------------|------------|
| **XSS** | Inject JS code into the page | Escape/sanitize input, use CSP |
| **CSRF** | Send unauthorized requests using user's session | CSRF tokens, SameSite cookies |

---

## ✅ Final Tip:
Always treat **user input as untrusted**, regardless of source.

