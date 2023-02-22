import Home from '../components/Home'
import {connect} from 'react-redux'
import {addTOCart, removeTOCart} from '../service/actions/actions.js'

const mapStateToProps=state=>({
    // data:state.cardItems
    // data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    //store에 접근하여
    //dispatch : store에 있는 state 바꾸는 함수를 실행합니다.
    addToCartHandler:data=>dispatch(addTOCart(data)),
    removeToCartHandler:()=>dispatch(removeTOCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home