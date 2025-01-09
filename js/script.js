let game = document.querySelector('.game')
let resultDisplay = document.querySelector('.game-result')

let cells = Array(9).fill(null)
let currentplayer = "x"

    function checking(){
        let winingChances = [
            [0,1,2], [3,4,5] , [6,7,8], 
            [0,3,6] , [1,4,7] , [2,5,8],
            [0,4,8] , [2,4,6]
        ]

       for(let combination of winingChances) {

            let [a,b,c] = combination;
            if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c] ){
            return cells[a];  
        }
       }
       return cells.includes(null) ? null : "Draw"

    }

    function hangdclick(e){
        
        let cellIndex = e.target.dataset.index
        cells[cellIndex] = currentplayer
        e.target.textContent =   cells[cellIndex]
        e.target.classList.add('disable')
        let result =  checking()

        if(result) {
            resultDisplay.textContent = result  === "Draw" ? "It's Draw" : `${result} win..!`
        }
        else{
            currentplayer = currentplayer == "x" ? "o" : "x"
        }

        }

    function creatCell(){
        
        for(let i = 0; i <  9; i++ ){
            let call = document.createElement('div')
            call.classList.add('call') 
            call.dataset.index = i        
            call.addEventListener('click', hangdclick)       
            game.appendChild(call)
        }
        }

creatCell();
    