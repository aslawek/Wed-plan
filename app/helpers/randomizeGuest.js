export function randomizeGuest () {
    const names = [
        "Andrzej",
        "Bogusąd",
        "Gniewomir",
        "Bazylid",
        "Dagobert",
        "Uniemysł",
        "Bożydar",
        "Miligost",
        "Rodryg",
        "Wacław",
        "Grzymisława",
        "Bonawentura",
        "Gawryła",
        "Epifania",
        "Tworzysława",
        "Tacjanna",
        "Domara",
        "Konradyna",
        "Żaklina",
        "Bernadetta"
    ];
    const surnames = [
        "III Sobieski/a",
        "Bonaparte",
        "Stalin",
        "Hitler",
        "Piłsudski/a",
        "Wąż",
        "Kloc",
        "Pipeta",
        "Ściera",
        "Żul",
        "Kiła",
        "Włóżmitu",
        "Cyc",
        "Czop",
        "Gamoń",
        "Kiełbasa",
        "Małolepszy/a",
        "Psikuta",
        "Pierdas",
        "Pyta"
    ];
    const ageCategories = [
        "0-5",
        "5-10",
        "10-15",
        "10-18",
        "18-30",
        "30-40",
        "30-40",
        "50+"
    ];
    const groomOrBride = ["groom", "bride", "none"];
    const yesOrNo = ["yes", "no"];
    const status = ["none", "invited", "confirmed"];

    function randomInt(min, max) {
        return Math.floor(Math.random()*(max - min) + min);
    }

    const guest = {
        name: names[randomInt(0, names.length)],
        surname: surnames[randomInt(0, surnames.length)],
        ageCategory: ageCategories[randomInt(0, ageCategories.length)],
        companion: yesOrNo[randomInt(0, yesOrNo.length)],
        side: groomOrBride[randomInt(0, groomOrBride.length)],
        family: groomOrBride[randomInt(0, groomOrBride.length)],
        status: status[randomInt(0, status.length)],
        hotel: yesOrNo[randomInt(0, yesOrNo.length)],
        note: "randomized ;)"
    };

    return guest;
}