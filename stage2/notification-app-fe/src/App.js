import React, { useEffect, useState } from "react";
import Log from "./logging-middleware/log.js";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchNotifications();
  }, [filter]);

  async function fetchNotifications() {
    const token = "<your_access_token>"; // replace with your token
    let url = "http://4.224.186.213/evaluation-service/notifications";

    if (filter !== "All") {
      url += `?notification_type=${filter}`;
    }

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setNotifications(data.notifications);
      Log("frontend", "info", "fetchNotifications", "Fetched notifications successfully");
    } catch (error) {
      Log("frontend", "error", "fetchNotifications", error.message);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Campus Notifications</h2>

      <div>
        <label>Filter by Type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Event">Event</option>
          <option value="Result">Result</option>
          <option value="Placement">Placement</option>
        </select>
      </div>

      <ul>
        {notifications.length === 0 ? (
          <p>No notifications found for this type.</p>
        ) : (
          notifications.map((n) => (
            <li key={n.ID}>
              <strong>{n.Type}</strong>: {n.Message} <em>({n.Timestamp})</em>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
