

var app=angular.module('myApp');

app.factory('BoardManipulator', function () {
  return {

    addColumn: function (board, columnName) 
	{
		board.columns.push(new Column(columnName));
    },

    addCardToColumn: function (board, column, cardTitle, Deudt, Priority) 
	{
		angular.forEach(board.columns, function (col) 
		{
			if (col.name === column.name) 
			{
				col.cards.push(new Task(cardTitle, column.name, Deudt, Priority));
			}
		});
    },
	
    removeCardFromColumn: function (board, column, card) 
	{
		angular.forEach(board.columns, function (col) 
		{
			if (col.name === column.name) 
			{
				col.cards.splice(col.cards.indexOf(card), 1);
			}
		});
    }
    

    
  };
});
