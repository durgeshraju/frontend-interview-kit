
# 🔐 Category 8: Headers & Auth (Bearer Token, Content-Type)

Understanding how to set and manage headers—especially for authentication and content types—is crucial in front-end development and often tested in interviews.

---

## ✅ Q1: What are HTTP headers?

**Answer:**  
Headers are key-value pairs sent along with HTTP requests or responses to convey additional information. They help define metadata like:
- Authentication tokens
- Content format (JSON, XML)
- Caching behavior
- Request context

---

## ✅ Q2: What is the `Content-Type` header and why is it important?

**Answer:**  
`Content-Type` tells the server the format of the data you're sending.

Examples:
- `application/json`: Sending JSON data
- `application/x-www-form-urlencoded`: Form submissions
- `multipart/form-data`: File uploads (with `FormData`)

```js
headers: {
  'Content-Type': 'application/json'
}
```

---

## ✅ Q3: What is a Bearer Token?

**Answer:**  
A Bearer Token is a type of access token used in authentication. It’s included in the `Authorization` header to prove the user’s identity.

```js
headers: {
  'Authorization': 'Bearer YOUR_TOKEN_HERE'
}
```

---

## ✅ Q4: How do you send headers using `fetch()`?

```js
fetch('/api/profile', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer abc123',
    'Content-Type': 'application/json'
  }
});
```

---

## ✅ Q5: How to send headers using `axios`?

```js
axios.get('/api/profile', {
  headers: {
    'Authorization': 'Bearer abc123',
    'Content-Type': 'application/json'
  }
});
```

---

## ✅ Q6: What’s the difference between `Content-Type` and `Accept` headers?

**Answer:**
- `Content-Type` → what **you are sending**
- `Accept` → what **you want in response**

```js
headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
```

---

## ✅ Q7: How do you handle token expiration or invalid token?

**Answer:**
Check for 401 Unauthorized responses and prompt the user to re-authenticate or refresh the token.

```js
fetch('/api/data', {
  headers: { Authorization: 'Bearer token' }
})
.then(res => {
  if (res.status === 401) {
    // Token expired, redirect to login
  }
});
```

---

## ✅ Q8: Common Interview Task – Build a fetch request with all auth headers

```js
async function getUserProfile(token) {
  const response = await fetch('/api/user', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}
```

---

## 🔄 Summary Tips

- Always set `Content-Type` when sending data
- `Bearer` token is the most common method for API auth
- Use `Accept` to specify what format of response you expect
- Learn to inspect headers in browser DevTools (Network tab)

---

Headers and Authentication are **core interview concepts** for frontend developers when working with real-world APIs.
