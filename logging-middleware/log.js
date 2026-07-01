async function Log(stack, level, pkg, message) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzExY3MwMzAxNzhAbWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3ODI4ODc2MjEsImlhdCI6MTc4Mjg4NjcyMSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImYzN2IxMDhjLWU3M2EtNDM4YS04OGQxLWMxNTkxNWE3YThjYiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imd1bmF0aXQgYm9zZSIsInN1YiI6IjIxOWEzMWVjLTdkYTItNGM4OC04MWNiLTZhMzc5Y2Q3NGZiZiJ9LCJlbWFpbCI6IjIzMTFjczAzMDE3OEBtYWxsYXJlZGR5dW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJndW5hdGl0IGJvc2UiLCJyb2xsTm8iOiJndW5hdGl0IGJvc2UiLCJhY2Nlc3NDb2RlIjoieHBRZGRkIiwiY2xpZW50SUQiOiIyMTlhMzFlYy03ZGEyLTRjODgtODFjYi02YTM3OWNkNzRmYmYiLCJjbGllbnRTZWNyZXQiOiJmaktkcUplR0pXZFdObUJDIn0.8PmJ4yUhbuWLdR1HY88iPv9FCd03cgUKYOsfFL4EJFc"; // 
  const response = await fetch("http://4.224.186.213/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ stack, level, package: pkg, message })
  });
  const data = await response.json();
  console.log(data);
}

export default Log;
