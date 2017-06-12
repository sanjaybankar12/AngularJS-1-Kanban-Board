

	function Column(name) {
		  return {
			name: name,
			cards: []
		  };
	}

	function KBoard(name, numberOfColumns) {
		  return {
			name: name,
			numberOfColumns: numberOfColumns,
			columns: []
		  };
	}