# Weakmap


```
class Area extends House{
  constructor(){
    super()
  
const housemap = new WeakMap()

housemap.set('maxCapacity',10);
housemap.set('squareFootage,100)


// functional declaraction that due to closure they can access the area
this._getFromMap = key => map.get(key)

this._setInMap = (key,map) => map.set(key,value)

  }


  get maxCapacity() {
    return this_getFromMap('maxCapacity')
}

  