import React, { useState, useEffect } from 'react';

import { Container, Text, Countdown } from './styles';
import { TimeTypes } from '../../model/type/TimeTypes';
import AlertModal from '../AlertModal';

const Timer: React.FC<{ minutes?: string; seconds?: string }> = ({
  minutes = '15',
  seconds = '00',
}) => {
  const [timeType, setTimeType] = useState<TimeTypes>('NO');
  const [time, setTime] = useState<{ minute: string; seconds: string }>({
    minute: minutes,
    seconds: seconds,
  });
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showWarningModal, setShowWarningModal] = useState<boolean>(false);

  useEffect(() => {
    let intervalId;

    if (!isFinished) {
      intervalId = setInterval(() => {

        let minute: number = Number(time.minute);
        let seconds: number = Number(time.seconds);

        const minuteString: string = seconds === 0 ? String(minute-1) : String(minute);
        const secondsString: string = seconds === 0 ? String(59) : String(seconds-1);

        const realMinute = Number(minuteString);
        const realSeconds = Number(secondsString);

        if (realMinute === 5) {
          setTimeType('LAST_5');
        }
        if (realMinute === 1) {
          setTimeType('LAST_1');
        }
        if (realMinute === 0 && realSeconds === 0) {
          clearInterval(intervalId);
          setIsFinished(true);
          setShowWarningModal(true);
        }
        
        setTime({
          minute: minuteString,
          seconds: secondsString,
        });

      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [time, isFinished]);

  return (
    <Container>
      <Text>Pesquisa válida por:</Text>
      <Countdown timeType={timeType}>
        <p data-testid="countdown-value">
          {time.minute.length === 1 ? `0${time.minute}` : time.minute}:{time.seconds.length === 1 ? `0${time.seconds}` : time.seconds}
        </p>
      </Countdown>
      <AlertModal
        show={showWarningModal}
        onClose={() => {
          setShowWarningModal(false);
          location.reload();
        }}
        title="Tempo de busca expirou."
        type="WARNING"
      />
    </Container>
  );
}

export default Timer;