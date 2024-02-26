import { Suspense } from "react"
import propTypes from "prop-types";
import Loading from "../Loading/Loading"

const LazyLayout=({component:Component,...rest})=>{
    return(
        <Suspense fallback={<div><Loading /></div>}>
            <Component {...rest} />
        </Suspense>
    )
}

LazyLayout.propTypes ={
    component: propTypes.elementType.isRequired
}

export default LazyLayout;