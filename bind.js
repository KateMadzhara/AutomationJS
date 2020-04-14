
function sum() {
   return this.a + this.b 
  }
  
  function sum1(c, d, t) {
    return this.a + this.b + c + d + t
   }
  /**
   * @param cont Context 
   * @param args Arguments
   */
  Function.prototype.bind2 = function (cont, ...args){
      if (args == null) {
          return this.apply(cont)
      }
    return this.apply(cont, [...args])
  }
  
let context = {
    a:2,
    b:3
}
console.log(sum.bind2(context,null)) 
console.log(sum1.bind2(context, 5, 6, 7))