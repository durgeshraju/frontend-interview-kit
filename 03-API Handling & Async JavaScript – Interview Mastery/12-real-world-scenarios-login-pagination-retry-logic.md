
# 🌍 Category 12: Real-World Scenarios (Login, Pagination, Retry Logic)

Frontend developers often work with real-world API use cases. Let's go through some of the most frequently asked patterns in interviews and practical projects.

---

## ✅ Q1: How do you implement a login API call?

**Answer:**
When a user logs in, you typically send their credentials (email/password) to the server and receive a token in response.

```js
async function loginUser(email, password) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) throw new Error('Login failed');

    const data = await response.json();
    localStorage.setItem('token', data.token); // Save token for future requests
    return data;
  } catch (err) {
    console.error('Login Error:', err.message);
  }
}
```

---

## ✅ Q2: How to handle pagination in API calls?

**Answer:**
APIs often support pagination using query params like `?page=1&limit=10`.

```js
async function fetchPaginatedPosts(page = 1, limit = 10) {
  const res = await fetch(`/api/posts?page=${page}&limit=${limit}`);
  const data = await res.json();
  return data;
}
```

🔁 In a real UI, you'll call this function on:
- Page load
- "Next" and "Previous" button clicks

---

## ✅ Q3: What is retry logic and when is it used?

**Answer:**
Retry logic is used when a request fails due to temporary issues (e.g. network timeout, flaky API).

```js
async function fetchWithRetry(url, retries = 3) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed');
    return await res.json();
  } catch (err) {
    if (retries > 0) {
      console.warn(`Retrying... Attempts left: ${retries}`);
      return fetchWithRetry(url, retries - 1);
    } else {
      throw err;
    }
  }
}
```

---

## ✅ Q4: Interview task – Use token in request headers

```js
async function fetchUserProfile() {
  const token = localStorage.getItem('token');

  const res = await fetch('/api/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();
  return data;
}
```

---

## ✅ Q5: Real-world form submission

```js
async function submitContactForm(formData) {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!res.ok) throw new Error('Form submission failed');
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
}
```

---

## 🔄 Summary Tips

- 🔐 Use login POST request to get and store tokens securely.
- 📄 Handle pagination via query params.
- 🔁 Use retry logic when needed — especially in mobile or unstable networks.
- 🛠 Wrap requests in reusable utility functions for consistency.

---

These examples reflect **real tasks in frontend jobs** and are commonly asked in interviews to evaluate hands-on API experience.
