const clock = () => {
  const secondHand = document.querySelector(".clock__hand--second");
  const minuteHand = document.querySelector(".clock__hand--minute");
  const hourHand = document.querySelector(".clock__hand--hour");

  const time = new Date();
  const seconds = (time.getSeconds() / 60) * 360 + 90;
  const minute = (time.getMinutes() / 60) * 360 + 90;
  const hour = (time.getHours() / 12) * 360 + 90;

  secondHand.style.transform = `translateY(-50%) rotate(${seconds}deg)`;
  minuteHand.style.transform = `translateY(-50%) rotate(${minute}deg)`;
  hourHand.style.transform = `translateY(-50%) rotate(${hour}deg)`;
};

setInterval(clock, 1000);

const sliders = document.querySelectorAll(".clock__range");
sliders.forEach(slider => {
  slider.addEventListener("input", e => {
    document.documentElement.style.setProperty(
      `--${e.target.id}`,
      `${e.target.value}px`
    );
  });
});
