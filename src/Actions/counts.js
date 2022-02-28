import { COUNTER_CHANGE } from "./Constants";

export function ChangeCount(Count){
    return{
        type:COUNTER_CHANGE,
        playload:Count
    }
}
