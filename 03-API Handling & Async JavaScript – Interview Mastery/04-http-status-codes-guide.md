
# 📊 Category 4: HTTP Status Codes (200, 201, 400, 404, 500, etc.)

HTTP status codes are issued by a server in response to a client's request. Understanding these codes helps frontend developers debug API issues and handle errors properly.

---

## ✅ Q1: What does a `200 OK` status code mean?

**Answer:**  
The request was successful, and the server returned the expected response.

- Used mostly with `GET` requests.
- Example: fetching user data, loading a page, etc.

---

## ✅ Q2: What does a `201 Created` status mean?

**Answer:**  
The request was successful and a **new resource was created**.

- Common with `POST` requests.
- Example: submitting a new user or blog post.

---

## ✅ Q3: What does a `204 No Content` status mean?

**Answer:**  
The server processed the request successfully but **does not return any content**.

- Often used for `DELETE` requests or `PUT` updates where no response is needed.

---

## ✅ Q4: What does a `400 Bad Request` mean?

**Answer:**  
The server couldn't understand the request due to invalid syntax or bad input.

- Example: Missing required fields in a form.

---

## ✅ Q5: What does `401 Unauthorized` mean?

**Answer:**  
Authentication is required or failed.

- Typically returned when a token is missing, expired, or incorrect.

---

## ✅ Q6: What does `403 Forbidden` mean?

**Answer:**  
The request is understood, but the server **refuses to authorize it**.

- Different from 401: you’re **logged in**, but you **don’t have permission**.

---

## ✅ Q7: What does `404 Not Found` mean?

**Answer:**  
The requested resource could not be found on the server.

- Common for broken links or incorrect endpoints.

---

## ✅ Q8: What does `500 Internal Server Error` mean?

**Answer:**  
A generic error from the server, indicating something **went wrong on their side**.

- It’s **not** the client’s fault.
- Example: Unhandled exceptions or database crashes on the backend.

---

## ✅ Q9: What is `503 Service Unavailable`?

**Answer:**  
The server is **temporarily unavailable** due to maintenance or overload.

- Useful to know when dealing with rate limits or downtime.

---

## ✅ Q10: How do you handle different status codes in `fetch()`?

**Answer:**
You can check `response.ok` and `response.status` to handle responses conditionally:

```js
fetch('/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
```

---

## ✅ Summary Table

| Code | Meaning                 | Use Case                           |
|------|--------------------------|-------------------------------------|
| 200  | OK                       | Successful GET request              |
| 201  | Created                  | Resource created via POST           |
| 204  | No Content               | Successful with no return (e.g., DELETE) |
| 400  | Bad Request              | Invalid input                       |
| 401  | Unauthorized             | Missing/invalid authentication      |
| 403  | Forbidden                | No permission to access             |
| 404  | Not Found                | Endpoint or resource missing        |
| 500  | Internal Server Error    | Unexpected error on server          |
| 503  | Service Unavailable      | Server down or overloaded           |

---

These codes are **always asked in interviews** to test your debugging and problem-solving skills in real-world frontend scenarios.
