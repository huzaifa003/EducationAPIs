const express = require('express');

app = express()
const port = 3000;


// Middleware to parse JSON requests
app.use(express.json());

questions = [
    {"number": 1, "question": "WHEN YOU GO SOMEWHERE FOR THE DAY, WOULD YOU RATHER", "A": "PLAN WHAT YOU WILL DO AND WHEN", "B": "JUST GO!!"},
    {"number": 2, "question": "IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH", "A": "FACTS-BASED COURSES", "B": "COURSES INVOLVING OPINION OR THEORY?"},
    {"number": 3, "question": "ARE YOU USUALLY", "A": "A “GOOD MIXER” WITH GROUPS OF PEOPLE", "B": "RATHER QUIET AND RESERVED?"},
    {"number": 4, "question": "DO YOU MORE OFTEN LET", "A": "YOUR HEART RULE YOUR HEAD", "B": "YOUR HEAD RULE YOUR HEART?"},
    {"number": 5, "question": "IN DOING SOMETHING THAT MANY OTHER PEOPLE DO, WOULD YOU RATHER", "A": "INVENT A WAY OF YOUR OWN", "B": "DO IT IN THE ACCEPTED WAY?"},
    {"number": 6, "question": "AMONG YOUR FRIENDS ARE YOU", "A": "FULL OF NEWS ABOUT EVERYBODY", "B": "ONE OF THE LAST TO HEAR WHAT IS GOING ON?"},
    {"number": 7, "question": "DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND", "A": "HELP YOU", "B": "STRESS YOU", "C": "POSITIVELY DEPRESS YOU?"},
    {"number": 8, "question": "WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO", "A": "ORGANIZE IT CAREFULLY BEFORE YOU START", "B": "FIND OUT WHAT IS NECESSARY AS YOU GO ALONG?"},
    {"number": 9, "question": "DO YOU TEND TO HAVE", "A": "BROAD FRIENDSHIPS WITH MANY DIFFERENT PEOPLE", "B": "DEEP FRIENDSHIP WITH VERY FEW PEOPLE?"},
    {"number": 10, "question": "DO YOU ADMIRE MORE THE PEOPLE WHO ARE", "A": "NORMAL-ACTING TO NEVER MAKE THEMSELVES THE CENTER OF ATTENTION", "B": "TOO ORIGINAL AND INDIVIDUAL TO CARE WHETHER THEY ARE THE CENTER OF ATTENTION OR NOT?"},    
    {"number": 11, "question": "DO YOU PREFER TO", "A": "ARRANGE PICNICS, PARTIES ETC, WELL IN ADVANCE", "B": "BE FREE TO DO WHATEVER TO LOOKS LIKE FUN WHEN THE TIME COMES?"},
    {"number": 12, "question": "DO YOU USUALLY GET ALONG BETTER WITH", "A": "REALISTIC PEOPLE", "B": "IMAGINATIVE PEOPLE?"},
    {"number": 13, "question": "WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER", "A": "JOIN IN THE TALK OF THE GROUP", "B": "STAND BACK AND LISTEN FIRST?"},
    {"number": 14, "question": "IS IT A HIGHER COMPLIMENT TO BE CALLED", "A": "A PERSON OF REAL FEELING", "B": "A CONSISTENTLY REASONABLE PERSON?"},
    {"number": 15, "question": "IN READING FOR PLEASURE, DO YOU", "A": "ENJOY ODD OR ORIGINAL WAYS OF SAYING THINGS", "B": "LIKE WRITERS TO SAY EXACTLY WHAT THEY MEAN?"},
    {"number": 16, "question": "DO YOU", "A": "TALK EASILY TO ALMOST ANYONE FOR AS LONG AS YOU HAVE TO", "B": "FIND A LOT TO SAY ONLY TO CERTAIN PEOPLE OR UNDER CERTAIN CONDITIONS?"},
    {"number": 17, "question": "DOES FOLLOWING A SCHEDULE", "A": "APPEAL TO YOU", "B": "CRAMP YOU?"},
    {"number": 18, "question": "WHEN IT IS SETTLED WELL IN ADVANCE THAT YOU WILL DO A CERTAIN THING AT A CERTAIN TIME, DO YOU FIND IT", "A": "NICE TO BE ABLE TO PLAN ACCORDINGLY", "B": "A LITTLE UNPLEASANT TO BE TIED DOWN?"},
    {"number": 19, "question": "ARE YOU MORE SUCCESSFUL", "A": "AT FOLLOWING A CAREFULLY WORKED OUT PLAN", "B": "AT DEALING WITH THE UNEXPECTED AND SEEING QUICKLY WHAT SHOULD BE DONE?"},
    {"number": 20, "question": "WOULD YOU RATHER BE CONSIDERED", "A": "A PRACTICAL PERSON", "B": "AN OUT-OF-THE-BOX-THINKING PERSON?"},
    {"number": 21, "question": "IN A LARGE GROUP, DO YOU MORE OFTEN", "A": "INTRODUCE OTHERS", "B": "GET INTRODUCED?"},
    {"number": 22, "question": "DO YOU USUALLY", "A": "VALUE EMOTION MORE THAN LOGIC", "B": "VALUE LOGIC MORE THAN FEELINGS?"},
    {"number": 23, "question": "WOULD YOU RATHER HAVE AS A FRIEND", "A": "SOMEONE WHO IS ALWAYS COMING UP WITH NEW IDEAS", "B": "SOMEONE WHO HAS BOTH FEET ON THE GROUND?"},
    {"number": 24, "question": "CAN THE NEW PEOPLE YOU MEET TELL WHAT YOU ARE INTERESTED IN", "A": "RIGHT AWAY", "B": "ONLY AFTER THEY REALLY GET TO KNOW YOU?"},
    {"number": 25, "question": "IN YOUR DAILY WORK, DO YOU", "A": "USUALLY PLAN YOUR WORK SO YOU WON’T NEED TO WORK UNDER PRESSURE", "B": "RATHER ENJOY AN EMERGENCY THAT MAKES YOU WORK AGAINST TIME", "C": "HATE TO WORK UNDER PRESSURE?"},
    {"number": 26, "question": "DO YOU USUALLY", "A": "SHOW YOUR FEELINGS FREELY", "B": "KEEP YOUR FEELINGS TO YOURSELF?"},

    {"number": 27, "question": "Which word would you choose?", "A": "SCHEDULED", "B": "UNPLANNED"},
    {"number": 28, "question": "Which word would you choose?", "A": "FACTS", "B": "IDEAS"},
    {"number": 29, "question": "Which word would you choose?", "A": "QUIET", "B": "HEARTY"},
    {"number": 30, "question": "Which word would you choose?", "A": "CONVINCING", "B": "TOUCHING"},
    {"number": 31, "question": "Which word would you choose?", "A": "IMAGINATIVE", "B": "MATTER-OF-FACT"},
    {"number": 32, "question": "Which word would you choose?", "A": "BENEFITS", "B": "BLESSINGS"},
    {"number": 33, "question": "Which word would you choose?", "A": "PEACEMAKER", "B": "JUDGE"},
    {"number": 34, "question": "Which word would you choose?", "A": "SYSTEMATIC", "B": "SPONTANEOUS"},
    {"number": 35, "question": "Which word would you choose?", "A": "STATEMENT", "B": "CONCEPT"},
    {"number": 36, "question": "Which word would you choose?", "A": "RESERVED", "B": "TALKATIVE"},
    {"number": 37, "question": "Which word would you choose?", "A": "ANALYZE", "B": "SYMPATHIZE"},
    {"number": 38, "question": "Which word would you choose?", "A": "CREATE", "B": "MAKE"},
    {"number": 39, "question": "Which word would you choose?", "A": "DETERMINED", "B": "DEVOTED"},
    {"number": 40, "question": "Which word would you choose?", "A": "GENTLE", "B": "FIRM"},
    {"number": 41, "question": "Which word would you choose?", "A": "SYSTEMATIC", "B": "CASUAL"},
    {"number": 42, "question": "Which word would you choose?", "A": "CERTAINTY", "B": "THEORY"},
    {"number": 43, "question": "Which word would you choose?", "A": "CALM", "B": "LIVELY"},
    {"number": 44, "question": "Which word would you choose?", "A": "JUSTICE", "B": "MERCY"},
    {"number": 45, "question": "Which word would you choose?", "A": "FASCINATING", "B": "SENSIBLE"},
    {"number": 46, "question": "Which word would you choose?", "A": "FIRM-MINDED", "B": "WARM HEARTED"},
    {"number": 47, "question": "Which word would you choose?", "A": "FEELING", "B": "THINKING"},
    {"number": 48, "question": "Which word would you choose?", "A": "LITERAL", "B": "FIGURATIVE"},
    {"number": 49, "question": "Which word would you choose?", "A": "ANTICIPATION", "B": "COMPASSION"},
    {"number": 50, "question": "Which word would you choose?", "A": "HARD", "B": "SOFT"}
]


// GET request to retrieve all users
app.get('/mbti/questions', (req, res) => {
    res.json(questions);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

