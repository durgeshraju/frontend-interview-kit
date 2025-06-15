
# 🌐 Category 7: Query Parameters & URL Building

When making API requests, it's common to pass **filters, search terms, and pagination info** via query parameters. This category focuses on:

- What query parameters are
- How to build URLs dynamically
- Encoding & appending values safely
- Real-world interview Q&A

---

## ✅ Q1: What are query parameters?

**Answer:**  
Query parameters are key-value pairs added to the end of a URL to **send extra information to the server**, such as filters, search terms, or pagination.

Example:
```
https://api.example.com/users?page=2&limit=10
```

---

## ✅ Q2: How do you build a URL with query parameters in JavaScript?

**Answer:**
```js
const baseUrl = 'https://api.example.com/users';
const params = new URLSearchParams({
  page: 2,
  limit: 10
});
const fullUrl = `${baseUrl}?${params.toString()}`;
```

---

## ✅ Q3: What is `URLSearchParams` and why should you use it?

**Answer:**  
`URLSearchParams` is a built-in browser API to create and manage query strings easily.  
It handles proper encoding automatically and ensures safe appending of values.

---

## ✅ Q4: How do you append parameters conditionally?

**Answer:**
```js
const params = new URLSearchParams();
if (searchTerm) params.append('q', searchTerm);
if (sortBy) params.append('sort', sortBy);

const url = `/api/products?${params.toString()}`;
```

---

## ✅ Q5: What happens if a query parameter contains special characters?

**Answer:**  
They will be **URL-encoded** automatically if you use `URLSearchParams`.

```js
new URLSearchParams({ name: 'John & Jane' }).toString();
// Output: name=John+%26+Jane
```

---

## ✅ Q6: Can you modify an existing URL's parameters?

**Answer:**
```js
const url = new URL('https://api.com/data?page=1');
url.searchParams.set('page', 2);
url.searchParams.append('sort', 'asc');
console.log(url.toString());
```

---

## ✅ Q7: Common Interview Task – Build a URL dynamically

**Problem:**  
Build a product listing API URL with optional filters like `category`, `priceRange`, `sortBy`.

**Solution:**
```js
function buildProductUrl(base, filters) {
  const params = new URLSearchParams();

  if (filters.category) params.append('category', filters.category);
  if (filters.priceRange) params.append('priceRange', filters.priceRange);
  if (filters.sortBy) params.append('sortBy', filters.sortBy);

  return `${base}?${params.toString()}`;
}

buildProductUrl('/api/products', {
  category: 'electronics',
  priceRange: '100-500',
  sortBy: 'price'
});
```

---

## ✅ Q8: Can query parameters be used with `POST` requests?

**Answer:**  
Yes, but it's uncommon. Query parameters are typically used with `GET`.  
For `POST`, data is usually sent in the body.

---

## 🔄 Summary Tips

- Use `URLSearchParams` to build query strings safely
- Never manually concatenate values—risk of errors and encoding issues
- Always validate what you send (e.g., `page` should be a number)
- Interviewers often test **URL-building logic** and **conditional filters**

---

This category is **frequently used in interviews and real apps**, especially in **search features, dashboards, pagination, and filters**.
