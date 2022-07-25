import { createContext } from "react";
import { io, Socket } from "socket.io-client";
import useAuth from "../hooks/useAuth";

interface RealTimeContextProps {
  socket: Socket;
}

const RealTimeContext = createContext<RealTimeContextProps>(null);

const RealTimeProvider = ({ children }) => {
  const { userToken } = useAuth();
  const socket = io(process.env.NEXT_PUBLIC_CCS_URL, {
    query: {userToken}
  });

  return (
    <RealTimeContext.Provider value={{ socket }}>{children}</RealTimeContext.Provider>
  );
};

export { RealTimeContext, RealTimeProvider };
