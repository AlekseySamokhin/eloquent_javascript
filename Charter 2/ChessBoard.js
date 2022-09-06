// 1
function chessBoard(size) {
    let line = "";
    for(let i = 1; i < size * size; i++) {
        if(i % (size + 1) === 0) {
            line += "\n";
        } else if(i % 2 === 0) {
            line += " "; 
        } else {
            line += "#"
        }
    }
    
    return line;
}

console.log(chessBoard(8));

// 2 
function chessBoard(size) {
    let board = "";

    for(let a = 0; a < size; a++) {
        for(let b = 0; b < size; b++) {
            if((a + b) % 2 === 0) {
                board += " ";
            } else {
                board += "#";
            }
        }

        board += "\n";
    }

    return board;
}

console.log(chessBoard(8));

// 3
function chessBoard(size) {
    for(var i = 1; i <= size; i++) {
        let board = "";
        while(board.length != size) {
            if(i % 2 != 0) {
                if((board.length + 1) % 2 != 0) {
                    board += "#";
                } else {
                    board += " ";
                }
            } else {
                if((board.length + 1) % 2 != 0) {
                    board += " ";
                } else {
                    board += "#"
                }
            }
        }
        
        console.log(board);
    }
}

chessBoard(8);