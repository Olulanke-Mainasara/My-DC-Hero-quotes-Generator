//Quote Generator Function
function quoteGenerator() {
    //Declaring the variables to be used in the function
    const quoteGen = document.getElementById("quoteGenerator");
    const quoteText = document.querySelector(".quote-text");
    const quoter = document.querySelector(".quoter");
    const logo = document.querySelector(".logo");


    //The array holding all the quotes available for view
    const quotes = [
        {
            quote: '" Dreams save us. Dreams lift us up and transform us. And on my soul, I swear until my dream of a world where dignity, honor and justice becomes the reality we all share, I`ll never stop fighting. Ever "',
            quoter: "Superman 1/10",
            background: "url(Images/Superman1.jpg)",
            logo: "Images/Logos/superman.webp",
        },
        {
            quote: '" A hero can be anyone, even a man doing something as simple and reassuring as putting a coat around a little boy`s shoulder to let him know that the world hadn`t ended "',
            quoter: "Batman 2/10",
            background: "url(Images/Batman4.jpg)",
            logo: "Images/Logos/batman.jpg",
        },
        {
            quote: '" I have no idea where I`m going to be tomorrow, but I accept the fact that tomorrow will come. And I`m going to rise to meet it "',
            quoter: "Wonder Woman 3/10",
            background: "url(Images/Wonder1.jpg)",
            logo: "Images/Logos/wonder.jpg",
        },
        {
            quote: '" My body may have its limitations, but when I put my mind to it, there`s nothing I can`t do "',
            quoter: "Cyborg 4/10",
            background: "url(Images/Cyborg1.jpg)",
            logo: "Images/Logos/cyborg.webp",
        },
        {
            quote: '" In brightest day, in blackest night, no evil shall escape my sight, let all those who woship evil`s might, beware my power, Green Lantern`s light "',
            quoter: "Green Lantern 5/10",
            background: "url(Images/Green3.jpg)",
            logo: "Images/Logos/green.jpg",
        },
        {
            quote: '" Life is locomotion, if you`re not moving, you`re not living, but there comes a time when you`ve got to stop running away from things, and you`ve got to start running towards something "',
            quoter: "Flash 6/10",
            background: "url(Images/Flash2.jpg)",
            logo: "Images/Logos/flash.jpg",
        },
        {
            quote: '" There`s an ancient wisdom I should have heeded long ago. If only I had recognized it`s truth applies as much to me as to all men . True happiness is found along a middle road, there lies the balance and the harmony with reason and emotion not at war but hand in hand "',
            quoter: "Aquaman 7/10",
            background: "url(Images/Aquaman2.jpg)",
            logo: "Images/Logos/aquaman.jpg",
        },
        {
            quote: '" Wisdom of Solomon, strength of Hercules, stamina of Atlas, power of Zeus, courage of Achilles, speed of Mercury, SHAZAM! "',
            quoter: "Shazam 8/10",
            background: "url(Images/Shazam2.jpg)",
            logo: "Images/Logos/shazam.jpg",
        },
        {
            quote: '" This. This is what I am. This is who I am. Come hell or high water. If I deny it, I deny everything I`ve ever done, everything I`ve ever fought for "',
            quoter: "Arrow 9/10",
            background: "url(Images/Arrow1.webp)",
            logo: "Images/Logos/arrow.jpg",
        },
        {
            quote: '" There isn`t much justice in this world, perhaps that`s why it is so satisfying to occasionally make some "',
            quoter: "Martian Manhunter 10/10",
            background: "url(Images/Martian1.jpg)",
            logo: "Images/Logos/martian.jpg",
        }
    ]


    //Actions to be performed on load
    let random = Math.floor(Math.random() * quotes.length);
    quoteGen.style.background = quotes[random].background;
    quoteGen.style.backgroundSize = "cover";
    quoteGen.style.backgroundPosition = "center";
    quoteText.innerText = quotes[random].quote;
    logo.setAttribute("src", quotes[random].logo);
    quoter.innerHTML = quotes[random].quoter + " " + `<i class="fa-solid fa-chevron-right" id="direct-1"></i>`;


    //Linking and adding an event listener to the "next quote" button
    const newQuote = document.getElementById("newQuote");
    newQuote.addEventListener("click", function () {
        let random = Math.floor(Math.random() * quotes.length);

        quoteGen.style.background = quotes[random].background;
        quoteGen.style.backgroundSize = "cover";
        quoteGen.style.backgroundPosition = "center"
        quoteText.innerText = quotes[random].quote;
        logo.setAttribute("src", quotes[random].logo);
        quoter.innerHTML = quotes[random].quoter + " " + `<i class="fa-solid fa-chevron-right" id="direct-1"></i>`;
    })
}


quoteGenerator();



//FAQ Accordion Function
function faqAccordion() {
    const question = document.querySelectorAll(".question");

    question.forEach(questionBox => {
        questionBox.addEventListener("click", function (e) {
            if (e.target.parentElement.classList.contains("active")) {
                e.target.parentElement.classList.remove("active");
            }
            else {
                question.forEach(remQuestion => {
                    remQuestion.parentElement.classList.remove("active");
                    e.target.parentElement.classList.add("active");
                })
            }
        }) 
    });
}


faqAccordion();