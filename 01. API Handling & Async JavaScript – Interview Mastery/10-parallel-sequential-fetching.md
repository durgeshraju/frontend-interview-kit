
# 🔄 Category 10: Parallel & Sequential Fetching (Promise.all, await)

Understanding how to fetch data either **at the same time** or **one after another** is an essential JavaScript skill, especially in frontend development where multiple API calls are common.

---

## ✅ Q1: What is parallel fetching?

**Answer:**  
Parallel fetching means sending **multiple requests at once** and waiting for all of them to complete together.

Use `Promise.all()` to fetch data in parallel.

### Example:

```js
const getPostsAndUsers = async () => {
  const [posts, users] = await Promise.all([
    fetch('/api/posts').then(res => res.json()),
    fetch('/api/users').then(res => res.json())
  ]);
  console.log(posts, users);
};
```

🧠 All fetches start together. Fastest overall performance.

---

## ✅ Q2: What is sequential fetching?

**Answer:**  
Sequential fetching means sending **one request after another**—the second starts only after the first one completes.

### Example:

```js
const getSequentialData = async () => {
  const posts = await fetch('/api/posts').then(res => res.json());
  const users = await fetch('/api/users').then(res => res.json());
  console.log(posts, users);
};
```

🧠 Slower than parallel, but necessary when the second request depends on the first.

---

## ✅ Q3: When should you use sequential fetching?

**Answer:**
Use sequential fetching when:
- The second API call **depends on** data from the first.
- There's a strict order of execution needed.

---

## ✅ Q4: When should you use parallel fetching?

**Answer:**
Use parallel fetching when:
- API calls are **independent** of each other.
- You want better performance by reducing wait time.

---

## ✅ Q5: What happens if one request fails in `Promise.all()`?

**Answer:**
If any of the promises fail, `Promise.all()` will throw an error, and none of the results are returned.

### Example:

```js
try {
  const [a, b] = await Promise.all([
    fetch('/api/a'),
    fetch('/api/b') // fails
  ]);
} catch (err) {
  console.error("One of the fetches failed:", err);
}
```

Use `Promise.allSettled()` if you want to handle all responses—even failed ones.

---

## ✅ Q6: How do you use `Promise.allSettled()`?

**Answer:**

```js
const results = await Promise.allSettled([
  fetch('/api/a'),
  fetch('/api/b')
]);

results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log('Success:', result.value);
  } else {
    console.error('Failed:', result.reason);
  }
});
```

---

## ✅ Q7: Interview Task – Fetch user data then fetch their posts

```js
const fetchUserData = async (userId) => {
  const user = await fetch(`/api/users/${userId}`).then(res => res.json());
  const posts = await fetch(`/api/users/${userId}/posts`).then(res => res.json());
  return { user, posts };
};
```

---

## ✅ Q8: Interview Task – Fetch all users and all posts in parallel

```js
const fetchEverything = async () => {
  const [users, posts] = await Promise.all([
    fetch('/api/users').then(res => res.json()),
    fetch('/api/posts').then(res => res.json())
  ]);
  return { users, posts };
};
```

---

## 🔄 Summary Tips

- ✅ Use `Promise.all()` for parallel (faster) execution when no dependency exists
- 🕗 Use `await` in sequence if order or dependency matters
- ⚠️ Handle errors in `Promise.all()` carefully
- ✅ Use `Promise.allSettled()` if you want results from all promises regardless of errors

---

This is a **must-know concept** for frontend developers working with APIs, especially in dashboard or data-heavy applications.
