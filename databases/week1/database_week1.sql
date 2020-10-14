SELECT * FROM task;
SELECT * FROM status;

-- Design queries that retrieve the following data sets. Compare with classmates to see if your answers are correct.
SELECT * FROM task;

-- 1-Find out how many tasks are in the task table
SELECT COUNT(id) FROM task;

-- 2-Find out how many tasks in the task table do not have a valid due date
SELECT * FROM task WHERE due_date IS null;

-- 3-Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id=3;

-- 4-Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id!= 3;

-- 5-Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

-- 6-Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 0,1;
-- OR
SELECT max(updated) FROM task;

-- 7-Get the title and due date of all tasks where the title or description contains database
SELECT title, description, due_date  FROM task WHERE title OR description IS NOT null;

-- 8-Get the title and status (as text) of all tasks
SELECT status.name, task.title FROM (task inner JOIN status ON status.id = task.status_id);

-- 9-Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.status_id) as count_status FROM task JOIN status ON status.id = task.status_id GROUP BY status.name ORDER BY count_status;

-- 10-Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, task.due_date FROM task JOIN status ON status.id = task.status_id ORDER BY due_date DESC;









