//reducer가 많아지면 action 상수가 중복될 수 있으니 액션이름 앞에 파일이름을 넣습니다.
//export const INCRESE = "count/increse";
//위의 경우를 제 프로젝트에 대입해보면
// [src/constatns.js] 에서 전체 action 상수를 export해서 관리하고 있습니다.12
import {ADD_TO_CART, REMOVE_TO_CART} from '../constants'

//cardDate를 처음에 0으로 선언하는것입니다.
// const initialState=(
    // cardData:[]
// )

//initialState인 State를 가져와서 action에 맞는 case를 실행합니다.
//
export default function cardItems(state= [], action)
{
    switch(action.type)
    {
        case ADD_TO_CART:
            console.warn("reducer", action)
            return [
                //불변성을 지키기 위해 ...state 를 사용하여 state가 변경되게 인식하도록 합니다.
                ...state,
                { cardData: action.data }
            ]
        case REMOVE_TO_CART:
                // console.warn("reducer", action)
                state.pop()
                return [
                    //이 ...state가 있어야 한개씩 없어집니다. 이게없을시 0으로 변경됩니다.
                    ...state,
                ]

        //defulat를 쓰지 않으면 맨처음 state에 cardData값이 undefined가 나옵니다.
        default:
            return state
    }
}

