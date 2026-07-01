import Log from "../logging-middleware/log.js";
async function getNotifications() {
  const token = "<your_access_token>"; /
  const url = "http://4.224.186.213/evaluation-service/notifications";

  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await response.json();
  return data.notifications;
}
async function showPriorityInbox() {
  const notifications = await getNotifications();
  const weight = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  const sorted = notifications.sort((a, b) => {
    const diff = weight[b.Type] - weight[a.Type];
    if (diff !== 0) return diff;
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
  const topTen = sorted.slice(0, 10);
  Log("backend", "info", "priorityInbox", "Fetched and sorted top 10 notifications");

  console.log("Top 10 Notifications:");
  console.log(topTen);
}

// Run the function
showPriorityInbox();
