
    var grid = new Array(3);
    for (var ndx = 0; ndx < 3; ndx++) {
        grid[ndx] = new Array(2);
    }
    var turn = 0;


    grid[0][0] = '<div id="div1" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    grid[0][1] = '<div id="div2" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    grid[0][2] = '<div id="div3" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';

    grid[1][0] = '<div id="div4" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    grid[1][1] = '<div id="div5" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    grid[1][2] = '<div id="div6" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';

    grid[2][0] = '<div id="div7" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    grid[2][1] = '<div id="div8" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
    grid[2][2] = '<div id="div9" class="grid" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';



    

    function turns(){
        //determine turns
        if (turn%2 == 0){    
            turn++;
            return "player1";
        } else{
            turn++;
            return "player2";
        }
    }
    

    function findWinner(){
        var cell00 = document.getElementById("div1").style.backgroundColor;
        var cell01 = document.getElementById("div2").style.backgroundColor;
        var cell02 = document.getElementById("div3").style.backgroundColor;
        var cell10 = document.getElementById("div4").style.backgroundColor;
        var cell11 = document.getElementById("div5").style.backgroundColor;
        var cell12 = document.getElementById("div6").style.backgroundColor;
        var cell20 = document.getElementById("div7").style.backgroundColor;
        var cell21 = document.getElementById("div8").style.backgroundColor;
        var cell22 = document.getElementById("div9").style.backgroundColor;
        
        //check player1
        if (cell00 == "rgb(204, 255, 204)" && cell01 == "rgb(204, 255, 204)" && cell02 == "rgb(204, 255, 204)"){
            //row 1
            alert("X Wins!");
            location.reload();
        } else if (cell10 == "rgb(204, 255, 204)" && cell11 == "rgb(204, 255, 204)" && cell12 == "rgb(204, 255, 204)"){
            //row 2
            alert("X Wins!");
            location.reload();
        } else if (cell20 == "rgb(204, 255, 204)" && cell21 == "rgb(204, 255, 204)" && cell22 == "rgb(204, 255, 204)"){
            //row 3
            alert("X Wins!");
            location.reload();
        } else if (cell00 == "rgb(204, 255, 204)" && cell10 == "rgb(204, 255, 204)" && cell20 == "rgb(204, 255, 204)"){
            //column 1
            alert("X Wins!");
            location.reload();
        } else if (cell01 == "rgb(204, 255, 204)" && cell11 == "rgb(204, 255, 204)" && cell21 == "rgb(204, 255, 204)"){
            //column 2
            alert("X Wins!");
            location.reload();
        } else if (cell02 == "rgb(204, 255, 204)" && cell12 == "rgb(204, 255, 204)" && cell22 == "rgb(204, 255, 204)"){
            //column 3
            alert("X Wins!");
            location.reload();
        } else if (cell02 == "rgb(204, 255, 204)" && cell11 == "rgb(204, 255, 204)" && cell20 == "rgb(204, 255, 204)"){
            //right to left diagonally
            alert("X Wins!");
            location.reload();
        } else if (cell00 == "rgb(204, 255, 204)" && cell11 == "rgb(204, 255, 204)" && cell22 == "rgb(204, 255, 204)"){
            //left to right diagonally
            alert("X Wins!");
            location.reload();
        } else 



        //check player2
        if (cell00 == "rgb(255, 255, 153)" && cell01 == "rgb(255, 255, 153)" && cell02 == "rgb(255, 255, 153)"){
            //row 1
            alert("O Wins!");
            location.reload();
        } else if (cell10 == "rgb(255, 255, 153)" && cell11 == "rgb(255, 255, 153)" && cell12 == "rgb(255, 255, 153)"){
            //row 2
            alert("O Wins!");
            location.reload();
        } else if (cell20 == "rgb(255, 255, 153)" && cell21 == "rgb(255, 255, 153)" && cell22 == "rgb(255, 255, 153)"){
            //row 3
            alert("O Wins!");
            location.reload();
        } else if (cell00 == "rgb(255, 255, 153)" && cell10 == "rgb(255, 255, 153)" && cell20 == "rgb(255, 255, 153)"){
            //column 1
            alert("O Wins!");
            location.reload();
        } else if (cell01 == "rgb(255, 255, 153)" && cell11 == "rgb(255, 255, 153)" && cell21 == "rgb(255, 255, 153)"){
            //column 2
            alert("O Wins!");
            location.reload();
        } else if (cell02 == "rgb(255, 255, 153)" && cell12 == "rgb(255, 255, 153)" && cell22 == "rgb(255, 255, 153)"){
            //column 3
            alert("O Wins!");
            location.reload();
        } else if (cell02 == "rgb(255, 255, 153)" && cell11 == "rgb(255, 255, 153)" && cell20 == "rgb(255, 255, 153)"){
            //right to left diagonally
            alert("O Wins!");
            location.reload();
        } else if (cell00 == "rgb(255, 255, 153)" && cell11 == "rgb(255, 255, 153)" && cell22 == "rgb(255, 255, 153)"){
            //left to right diagonally
            alert("O Wins!");
            location.reload();
        }

    }


    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);


            
        
    }
    function drop(ev) {
        var data = ev.dataTransfer.getData("Text");
        ev.preventDefault();
        //Create another image tag
        var paste = document.createElement("img");
        var original = document.getElementById(data);
        paste.src = original.src;
        //Paste the image copy into div
        ev.target.appendChild(paste);
        

         
            if (turns() == "player1") {
                
                    //If odd number move, player one can drag
                    document.getElementById("hint").innerHTML = "O's turn."
                    document.getElementById("drag2").draggable = true;
                    document.getElementById("drag1").draggable = false;
                    document.getElementById(ev.target.id).style.background = "#CCFFCC";
                    
                    

                
            } else {
            
                //If even number move, player two can drag
                document.getElementById("hint").innerHTML = "X's turn."
                document.getElementById("drag1").draggable = true;
                document.getElementById("drag2").draggable = false;
                document.getElementById(ev.target.id).style.background = "#FFFF99";
                
                
            
            }


           findWinner();
    }



    document.writeln("<table><tr>")
    for (var i = 0; i < grid.length; i++) {

        document.writeln("<td id='cell" + i + "0'>" + grid[i][0] + "</td>");
        document.writeln("<td id='cell" + i + "0'>" + grid[i][1] + "</td>");
        document.writeln("<td id='cell" + i + "0'>" + grid[i][2] + "</td></tr>");
    }


    document.writeln("</table>");   
