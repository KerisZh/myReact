import CountUI from "../../components/Count"
import {
    createIncrementAction,
    createDecrementAction,
  } from "../../redux/count_action";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
         count: state.count //UI组件中需要什么参数，对象中就写哪些参数
     }
}

function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
          dispatch(createIncrementAction(number));
        },
        jian: (number) => {
          dispatch(createDecrementAction(number));
        },
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
