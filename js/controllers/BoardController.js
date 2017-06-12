

var app=angular.module('myApp');

app.controller('BoardController',function ($scope, BoardService, BoardDataFactory) 
{

	  $scope.kanbanBoard = BoardService.kanbanBoard(BoardDataFactory.kanban);

	  $scope.addNewTask = function (column) {
		BoardService.addNewTask($scope.kanbanBoard, column);
	  };
	  
	  $scope.sortList=function(column,value)
	  {
			
	  };
	  
	  $scope.kanbanSortOptions = {
		
		itemMoved: function (event) 
		{
		  event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
		},
		orderChanged: function (event) {
		},
		containment: '#board'
	  };

	  $scope.removeTask = function (column, card) {
		BoardService.removeTask($scope.kanbanBoard, column, card);
	  };

  
});

