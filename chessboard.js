const chessboard = () => {


  /* const grid = [];
   for (let i = 0; i < 8 ; i++) {   
         let holdArr = [];
         for(let j= 0 ; j < 8 ; j++ ) {
            holdArr.push(`${String.fromCharCode(97 + i)} - ${j+1}`) 
        }
        grid.push(holdArr) 
   } 
   */

   const ruler = new Array(8).fill('📏');
   console.log(ruler)

   const formatCoord = (x,y) => `${String.fromCharCode(97 + x)} - ${(y)}`

   let grid = ruler.map((x, col) => ruler.map((y, row) => formatCoord(col, row + 1)))

   //grid[0][9] = 'rouge'

   console.log(grid)
   return grid


}
module.exports = chessboard;

