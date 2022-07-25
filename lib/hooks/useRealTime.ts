import { useContext } from "react"
import { RealTimeContext } from "../contexts/RealTimeContext";

const useRealTime = () => {
  return useContext(RealTimeContext);
}

export default useRealTime;
