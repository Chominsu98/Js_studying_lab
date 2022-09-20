function Custom_Iterator(items){
    this.index=0;
    //items로 들어오는 이터러블한 자료형에 대한 인덱스정보를 갖고잇음
    this.items=items;//현재들어온 이터러블 자료형
}

Custom_Iterator.prototype={
    reset:function(){
        this.index=0;
    },
    first:function(){
        this.reset();
        return this.next();
    },
    next:function(){
        const value = this.items[this.index++];

        if (this.hasNext()) {
          return {
            done: false,
            value,
          };
        }
    
        return { done: true };
    },
    hasNext:function(){
        return this.index<this.items.length;
    },
    current:function(){
        if(this.hasNext()){
            return{
                done:false,
                value:this.items[this.index]
            }
        }
        else{
            return{
                done:true
            }
        }
    },
    each:function(){
        for(let item=this.first();this.hasNext();item=this.next()){
            console.log(item)
        }
    }

}

const arr=[1,2,3,"hi","bye"];
const iterable=new Custom_Iterator(arr);
//만든 배열을 만든 iterator객체에 넣어준다

while(iterable.hasNext()){
    console.log(iterable.next())
}

console.log(iterable.current())
//현재 정보까지의 찍어보기

iterable.reset();
//다시 인덱스 초기화

iterable.each();