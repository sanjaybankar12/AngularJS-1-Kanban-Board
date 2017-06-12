

var app=angular.module('myApp');

app.service('BoardDataFactory', function () {

  return {
    kanban: {
      "name": "Kanban Board",
      "numberOfColumns": 4,
      "columns": [
        {"name": "New", "cards": [
          {"task_name": "Start Kanban Board development", "due_date":"12-05-2017", "priority": "high"},
          {"task_name": "Design of Kanban Board", "due_date":"13-05-2017", "priority": "low"}
        ]},
        {"name": "On-Hold", "cards": [
          {"task_name": "Kanban Backend Development", "due_date":"12-05-2017", "priority": "low"}
        ]},
        {"name": "In-Progress", "cards": [
          {"task_name": "Testing of Kanban Borad", "due_date":"13-05-2017", "priority": "high"},
          {"task_name": "Add Priority Based Sorting", "due_date":"13-05-2017", "priority": "high"}
        ]},
        {"name": "Done", "cards": [
          {"task_name": "Work-Flow Understanding", "due_date":"12-05-2017", "priority": "medium"},
          {"task_name": "Testing of First Module", "due_date":"12-05-2017", "priority": "high"}
        ]}
      ]
    }
  };
});
