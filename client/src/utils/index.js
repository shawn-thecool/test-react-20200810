import { GOOD_BAD_STATE } from '../constants'

/**
 * api computed value -> store store.computed.js
 * @param {number} bannerScore 
 */
export const bannerScoreToGoodBadState = (bannerScore)=>{
    switch (bannerScore) {
        case bannerScore > 79: return GOOD_BAD_STATE.VERY_GOOD
        case bannerScore > 59: return GOOD_BAD_STATE.GOOD
        default : return GOOD_BAD_STATE.BAD
    }
}
