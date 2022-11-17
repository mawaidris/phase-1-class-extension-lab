// Your code here

class Polygon {
      constructor(arr){
        this.arr = arr
        this.count = arr.length
      }
    get countSides(){
        return this.count
       
    }
    get perimeter(){
        return this.arr.reduce((a,b)=>{
            return a+b
        })
    } 
}
   class Triangle extends Polygon{
       
    get isValid(){
        if(this.countSides === 3){
            let [a,b,c]=  this.arr
          if((a + b > c) && (a + c > b) && (b + c > a)){
            return true
          }else{
            return false
          }
        }
    }
}

     class Square extends Polygon{
        get isValid(){
            let [a,b,c,d]=this.arr
            if((a===b)&&(a===c)&&(a===d)){
                return true
              }else{
                return false
              }
        }

        get area(){
            return this.arr[0]**2
        }
     }