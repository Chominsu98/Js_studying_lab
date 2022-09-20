export const createStore=(initialState,reducer)=>{
    let state=initialState;
    const events={};
    //각각의 action에 맞는 이벤트들을 저장해주는 곳-옵저버패턴에 의하면 자기를 관찰하는 옵저버들의 리스트


    //특정 이벤트가 변경시 해당 콜백을 달라는 것을 등록하는것
    //옵저버패턴에서의 구독이랑 같은 느낌
    //상태관리 라이브러리에서는 상태변화를 감지하여 해당 상태를 쓰는애들에 대하여 재랜더링을 시켜주는 용도
    const subscribe=(actionType,evventCallBack)=>{
        if(!events[actionType]){
            events[actionType]=[];
            //아직정의되지 즉 구독되지 않았던 이벤트이면 초기화
        }
        events[actionType].push(evventCallBack);

    }

    //실제로 상태변경시 해당 함수를 불러 이미 저장되어있는 콜백행동들을 행동시킴
    const publish=(actionType)=>{
        if(!events[actionType]){
            return;
        }
        events[actionType].map(ev=>ev());
        //해당 액션이 갖고있던 콜백이벤트들을 진행시켜줌
    }

    const dispatch=(action)=>{
        state=reducer(state,action);
        //인자로 받은 reducer로 state를 받은 액션을 기준으로 state를 변경시켜줌
        publish(action.type);
        //해당 action에 대한 콜백이벤트를 발동-리액트 상에서는 state가 변경되었으니 리랜더링을 호출해주는 느낌

    }

    const getState=()=>state;
    //현재 스토어상에 저장되어있는 상태를 알려주는 함수

    return{
        getState,
        subscribe,
        dispatch
    }
    
}