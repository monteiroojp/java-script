class retangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.log('Preencha uma largura positiva!')
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight
        }
        else{
            console.log('Preecha uma altura positiva!')
        }
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }

    get area(){
        return this._height * this._width
    }
}

const retangle1 = new retangle(2, 3)
console.log(retangle1.width)
console.log(retangle1.height)
console.log(retangle1.area)