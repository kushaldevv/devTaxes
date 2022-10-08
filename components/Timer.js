import React, { useState } from 'react'
import { Text } from "@chakra-ui/react";
function Timer() {
  var countDownDate = (new Date("Jan 5, 2015 15:37:25").getTime());
  const [timer, setTimer] = useState("");
  setInterval(function () {
    var now = new Date().getTime();
    var distance = now - countDownDate;
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var days = (Math.floor(distance / (1000 * 60 * 60 * 24)) % 365);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setTimer(years + "y " + days + "d " + hours + "h \n" + minutes + "m " + seconds + "s ");
  }, 1000);

  return (
    <Text fontSize={['2.5vw', '2.5vw', '1.5vw', '1.25vw']} color='white' pos='absolute' top='53.5%' right={['7%', '6.5%', '6%', '5%']}>
      {timer}
    </Text>
  )
}

export default Timer 