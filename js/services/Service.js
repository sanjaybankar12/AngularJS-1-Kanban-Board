
var app=angular.module('myApp');

app.service('BoardService', function ($uibModal, BoardManipulator) {

  return {
	  
		kanbanBoard: function (board) 
		{
			var kanbanBoard = new KBoard(board.name, board.numberOfColumns);
			angular.forEach(board.columns, function (column) 
			{
				BoardManipulator.addColumn(kanbanBoard, column.name);
				angular.forEach(column.cards, function (task) 
				{
					BoardManipulator.addCardToColumn(kanbanBoard, column, task.task_name, task.priority, task.due_date);
				});
			});
			return kanbanBoard;
		},
	  
		removeTask: function (board, column, card) 
		{
			if (confirm('Do you want to remove this task?')) 
			{
				BoardManipulator.removeCardFromColumn(board, column, card);
			}
		},

		addNewTask: function (board, column) 
		{
			var modal = $uibModal.open({
				templateUrl: 'NewTask.html',
				controller: 'TaskController',
				backdrop: 'static',
				resolve: {
				  column: function () {
					return column;
				  }
				}
		    });
		  
			modal.result.then(function (taskDetails) 
			{
				if (taskDetails) 
				{
					BoardManipulator.addCardToColumn(board, taskDetails.column, taskDetails.task_name, taskDetails.priority, taskDetails.due_date);
				}
			});
		}			
    
  };
  
});