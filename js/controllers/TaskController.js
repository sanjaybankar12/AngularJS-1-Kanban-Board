

var app=angular.module('myApp');

app.controller('TaskController',function ($scope, $uibModalInstance, column) 
{

	  function initScope(scope) {
		scope.columnName = column.name;
		scope.column = column;
		scope.task_name = '';
		scope.due_date = getFormatDate();
		scope.priority = 'high';		
		
	  }
	  
	  function getFormatDate()
	  {
		  var dd=new Date().getDate();
		  var mm=(new Date().getMonth()+1);
		  var yy=new Date().getFullYear();
		  
		  if(dd<10)
		  {
			  dd="0"+dd;
		  }
		  
		  if(mm<10)
		  {
			  mm="0"+mm;
		  }
		  
		  return dd+"-"+mm+"-"+yy;
		  
	  }

	  $scope.addNewTask = function () 
	  {
			if (!this.myForm.$valid) 
			{
				return false;
			}
			$uibModalInstance.close({task_name: this.task_name, column: column, due_date: this.due_date, priority: this.priority});
	  };

	  $scope.close = function () {
		$uibModalInstance.close();
	  };

	  initScope($scope);

});

