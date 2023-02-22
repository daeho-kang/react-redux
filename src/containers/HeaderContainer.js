import Header from '../components/Header'
import {connect} from 'react-redux'
// import {addTOCart} from '../service/actions/actions.js'

const mapStateToProps=state=>({
    // data:state.cardItems
    data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    //store에 접근하여
    //dispatch : store에 있는 state 바꾸는 함수를 실행합니다.
    // addToCartHandler:data=>dispatch(addTOCart(data))
})

//Header로 prop없이 상태관리하게 state를 보내주는듯합니다.
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home