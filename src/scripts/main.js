AOS.init();

const eventDate = new Date('July 11, 2025 19:00:00');
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function(){
    const today = new Date();
    const actualTimeStamp = today.getTime();
    const distanceEvent = eventTimeStamp - actualTimeStamp;

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;
    const secMs = 1000;

    const daysToEvent = Math.floor(distanceEvent / dayMs);
    const hoursToEvent = Math.floor((distanceEvent % dayMs) / hourMs);
    const minsToEvent = Math.floor((distanceEvent % hourMs) / minMs);
    const secsToEvent = Math.floor((distanceEvent % minMs) / secMs);

    document.querySelector("#day").innerHTML = `${daysToEvent}d`;
    document.querySelector("#hour").innerHTML = `${hoursToEvent}h`;
    document.querySelector("#min").innerHTML = `${minsToEvent}min`;
    document.querySelector("#sec").innerHTML = `${secsToEvent}s`;

    if (distanceEvent < 0) {
        clearInterval(countHours);
        document.querySelector(".timer__container").style.display = "none";
        document.querySelector(".header__container__timer").innerHTML = "O evento já começou!";
    }
}, 1000);
