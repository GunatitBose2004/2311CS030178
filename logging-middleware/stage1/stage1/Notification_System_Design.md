Stage 1 is for Notification System Design
This module fetches notifications from the Affordmed API and sorts them by priority.
Priority = Weight (Placement --> Result --> Event) + Recency (latest first).
The top 10 notifications are displayed and logged using the logging middleware.
