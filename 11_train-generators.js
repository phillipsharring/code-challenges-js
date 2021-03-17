function* metroNorthRailroadGenerator() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

const metroNorthRailroad = metroNorthRailroadGenerator();

const nextButton = document.querySelector("#next");

nextButton.addEventListener("click", () => {
  const stop = metroNorthRailroad.next();

  if (stop.done) {
    console.log("We made it!");
    nextButton.setAttribute("disabled", "disabled");
    return;
  }

  console.log(stop.value);
});
