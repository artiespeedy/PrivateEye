var witnessData = [];

var antiSocialHRY = {question: "Want to tell me about your day?", response: {line: "Theres not much to talk about. It was like any other day.", questions: [
    {question: "Your a fun guy to have at parties, aren't you.", response: null},
    {question: "There has got to your day than just that.", response: {line: "If you are going to pester me about it, I guess I'll tell you. Same as usual, went to all of my classes, learned nothing.", questions: [
        {question: "You don't think much of school, do you.", response: {line: "I only go because my parents force me to.", question:  [
            {question: "Sigh.", response: null},
            {question: "Seems fine.", response: null}
        ]}},
        {question: "I'm sure the ability to paint with your toes will come in handy some day.", response: null},
        {question: "Well, yeah, I guess you were right.", response: null}
    ]}}
]}};

var snarkyResponse = {line: "You can't think of anything else to talk about?", questions: [
    {question: "Do you have no respect? I am the adult here.", response: null},
    {question: "That sounds about right.", response: null},
    {question: "Are you judging me?", response: null}
]};

var snarkyResponse2 = {line: "How can you be so bad at making conversations?", questions: [
    {question: "Do you have no respect? I am the adult here.", response: null},
    {question: "I'm really no different from you. You don't magically become good at conversation as an adult.", response: {line: "Well, thats what it looks like from the adults I've seen. They all act like they know everything but are just as ignorant.", questions: [
        {question: "That can't be right...", response: null},
        {question: "It's true though. Adults are different.", response: null},
        {question: "Its how the world works.", response: null}
    ]}},
    {question: "Are you judging me?", response: {line: "Yes", questions: [
        {question: "Damn.", response: null},
        {question: "Sigh.", response: null},
        {question: "Do you have no respect? I am the adult here.", response: null}
    ]}}
]};

var noTalkingQ = {question: "Not in the mood to talk, eh?", response: {line: "Yeah. To be honest, my day was pretty shitty.", questions: [
    {question: "What shoes did you wear?", response: snarkyResponse},
    {question: "Don't be shy.", response: {line: "Yeah, I am pretty tired. I should not have stayed up so late.", questions: [
        {question: "Make sure to get a minimum of 24 hours of sleep everyday.", response: null},
        {question: "Sure.", response: null}
    ]}}
]}};

var boringDay = {question: "You enjoy yourself today?", response: {line: "Not really, today was pretty boring.", questions: [
    {question: "I see", response: null}
]}};

var beautyR = {line: "Sigh. I know. But you have to look for the beauty in the world.", questions: [
    {question: "Aye, thats my goal in life too.", response: null},
    {question: "Well, thats a really good way to waste time, isn't it.", response: null},
    {question: "Beauty is the most valuable commodity in this world.", response: null}
]};

var laughs = {line: "Ha. You are a funny one.", questions: [
    {question: "No, I am serious.", response: null},
    {question: "We could all use a bit of laughter in our lives.", response: {line: "Couldn't we all... *looks down*", questions: [
        {question: "*look down*", response: null},
        {question: "You're a good guy, don't forget that.", response: {line: "Thanks.", questions: [
            {question: "Don't mention it.", response: null}
        ]}}
    ]}}
]};

var whyd1 = {question: "How are you doing?", response: {line: "Fine", questions: [
    antiSocialHRY,
    {question: "Ok.", response: null}
    
]}};

var whyd2 = {question: "How are you doing?", response: {line: "Fine", questions: [
    antiSocialHRY,
    {question: "You enjoy yourself today?", response: snarkyResponse},
    {question: "Anything you want to add?", response: {line: "Nah", questions: [
        {question: "I guess thats fine.", response: null},
        {question: "Not in the mood to talk, eh?", response: null}
    ]}}
]}};

var whyd3 = antiSocialHRY;

var whyd4 = {question: "Want to talk about how you are doing?", response: {line: "Nah.", questions: [
    {question: "I guess thats fine.", response: null},
    noTalkingQ
]}};

var whyd5 = {question: "How was your day?", response: {line: "Sigh.", questions: [
    noTalkingQ,
    antiSocialHRY,
    boringDay
]}};

var wig1 = {question: "You have a goal in life?", response: {line: "I have always wanted to be an astronaut. See the moon up close in person.", questions: [
    {question: "I have always dreamed of doing the same.", response: laughs},
    {question: "Thats ridiculous.", response: beautyR}
]}};

var wig2 = {question: "You have a goal in life?", response: {line: "For life? Ha. It'll be a while before I have to think about that.", questions: [
    {question: "For such a large decision, its never to early to start thinking.", response: null},
    {question: "I agree, its way too early to think about what you will do in your life.", response: null},
    {question: "Well, I don't see anything wrong with getting a head start.", response: null}
]}};

var wig3 = {question: "Have any idea about what you want to do in life?", response: {line: "Nah, it makes me nervous even thinking about it.", questions: [
    {question: "Well, why is that?", response: {line: "Well, there are just so many ways to life your life. What if I make the wrong decision?", questions: [
        {question: "You can always change your mind.", response: {line: "Yes, but there are certain things that you cannot change your mind about. What if I suddenly decided I want to be a doctor? I can't just go to school again.", questions: [
            {question: "Well, I can see that being a problem.", response: null}
        ]}},
        {question: "Remember that there is never a wrong decision.", response: {line: "Well, what if I don't like my decision?", questions: [
            {question: "That doesn't make it wrong. It just makes it a decision that you are not satified with.", response: null}
        ]}}
    ]}},
    {question: "Yeah, me too. I don't even know why I am doing this job.", response: null}
]}};

var wig4 = {question: "You have any plans on what to do with your life?", response: {line: "I am not too sure yet. I am still looking for what I like to do.", questions: [
    {question: "Got an idea of where you might what to go?", response: {line: "I was thinking of being an actor. I really enjoy the thrill I get from acting.", questions: [
        {question: "What thrill?", response: {line: "Its really thrilling to see the audience see the person you portray and nothing else of you. Its like taking a different person's perspective of the world.", questions: [
			{question: "I can see what you mean.", response: null}
		]}},
		{question: "Yeah, acting can be really fun.", response: null}
    ]}},
	{question: "Thats fine. Nothing wrong with being unsure.", response: null}
]}};

var wig5 = {question: "What do you plan to do with your life?", response: snarkyResponse};
var wig6 = {question: "What is your dream job?", response: snarkyResponse2};

var hb1 = {question: "What do you enjoy doing?", response: {line: "I enjoy cooking.", questions: [
	{question: "Why?", response: {line: "I feel like I get sucked into the making of it. There is only me and the food.", questions: [
		{question: "Almost makes me want to try cooking.", response: null},
		{question: "I can totally see that.", response: null},
		{question: "A truly beautiful art.", response: null}
	]}}
]}};

var hb2 = {question: "What is the meaning of life?", response: snarkyResponse};
var hb3 = {question: "What do you enjoy doing?", response: snarkyResponse2};

var hb4 = {question: "What do you like to do?", response: {line: "I like to meditate.", questions: [
	{question: "Why is that?", response: {line: "I no longer have to think about choices. Its so pure.", questions: [
		{question: "Sounds interesting. Would you describe it as a way to escape life?", response: {line: "It definately is.", questions: [
			{question: "Thats cool.", response: null}
		]}},
		{question: "Sounds like something I should try.", response: {line: "I would recommend it.", questions: [
			{question: "Ok.", response: null},
			{question: "I'll try it as soon as possible.", response: null}
		]}}
	]}},
	{question: "I always got bored during that.", response: null}
]}};

var hb5 = {question: "What are your hobbies?", response: {line: "I really enjoy biking.", questions: [
	{question: "Any particular reason why?", response: {line: "I like to look at the scenary while biking.", questions: [
		{question: "Where do you like to bike?", response: {line: "Anywhere near nature is nice, but near the ocean is the best.", questions: [
			{question: "Ok.", response: null}
		]}},
		{question: "What do you find so inticing about nature?", response: {line: "I feel in touch with what makes me human.", questions: [
			{question: "Uh huh.", response: null},
			{question: "Ok.", response: null},
			{question: "Sounds fun.", response: null}
		]}}
	]}},
	{question: "Do you like potatoes as well?", response: {line: "No.", questions: [
		{question: "Ok.", response: null}
	]}}
]}};

var caseData1 = [
	[whyd3, wig1, hb1],
	[whyd2, wig3, hb5],
	[whyd1, wig6, hb3],
	[whyd4, wig4, hb4],
	criminal1,
	[whyd5, wig2, hb2]
];

var caseData2 = [
	[whyd1, wig5, hb2],
	[whyd5, wig4, hb4],
	[whyd3, wig1, hb1],
	[whyd1, wig4, hb3],
	criminal2,
	[whyd2, wig3, hb1]
];

var caseData3 = [
	[antiSocialHRY, wig5, hb3],
	[whyd5, wig3, hb2],
	[whyd5, wig1, hb3],
	[whyd2, wig2, hb5],
	criminal3,
	[whyd4, wig6, hb3]
];