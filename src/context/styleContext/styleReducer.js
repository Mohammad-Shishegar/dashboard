const StyleReducer = (state , action) => {

    switch(action.type){
        case  "Open" : {
            return {
                Open : true
            }
        }
        case  "Close" : {
            return {
                Open : false
            }
        }
        case  "Toggle" : {
            return {
                Open : !state.Open
            }
        }
    }
}

export default StyleReducer