import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useRealTime } from "../lib";

interface RelaySocketData {
  name: string;
  state: boolean;
}

const Controller = () => {
  const { socket } = useRealTime();

  const [relays, setRelays] = useState({
    stationState: false,    
  });

  const onSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked: state } = event.currentTarget;
    
    socket.emit('writeRelay', { name, state });

    setRelays({
      ...relays,
      [name]: state,
    });
  };

  useEffect(() => {
    socket.on('readRelay', ({ name, state }: RelaySocketData) => {
      setRelays({
        ...relays,
        [name]: state,
      });
    });
  }, []);

  return (
    <FormGroup>
      <FormControlLabel
        name="station-state"
        control={<Switch checked={relays.stationState} onChange={onSwitchChange} />}
        label={`Station State (${relays.stationState ? 'Open' : 'Closed'})`}
      />
    </FormGroup>
  );
}

export default Controller;
