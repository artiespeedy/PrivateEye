"use strict";
//Criminals

var criminals = [];

//Culture-less
var criminal1 = [
    {question: "How are you doing?", response: {line: "Fine.", questions: [
        {question: "Anything you want to add?", response: {line: "As long as you don't twist it.", questions: [
            {question: "I won't, don't worry.", response: {line: "Well, I don't really feel like I belong with the people I know. I don't associate with the things my family and classmates like.", questions: [
                {question: "I see.", response: null}
            ]}},
            {question: "No use hanging on to the past. Lets move onto a different subject.", response: null}
        ]}},
        {question: "Ok.", response: null}
    ]}},
    {question: "What is your goal this year?", response: {line: "Nothing really. I mean, does it really matter?", questions: [
        {question: "Well, of course it does. Its your future.", response: {line: "Eh, whether or not I exist doesn't really depend on my grades at school."}, questions: [
            {question: "Ok.", response: null}
        ]},
        {question: "Yeah, I see what you mean.", response: null}
    ]}},
    {question: "What do you do enjoy doing?", response: {line: "I enjoy watching how people behave.", questions: [
        {question: "Hmmm.", response: null}
    ]}}
];

//Power struggle
var criminal2 = [
    {question: "How are you doing?", response: {line: "I've had a pretty bad day.", questions: [
        {question: "Care to tell me about it?", response: {line: "Well, I was working in a group project, and my group members simply won't listen! I have a great idea for our project but they refuse to let me implement it. ", questions: [
            {question: "Have any idea why?", response: {line: "They don't think it matters. I agree that it doesn't really matter in the long run, but this is what school is all about! I love making things to the best of my ability.", questions: [
                {question: "Thats horrifying!", response: {line: "It really is! I think that they don't care because they don't understand.", questions: [
                    {question: "Thats how they are.", response: {line: "Well, they could change. I could change them.", questions: [
                        {question: "I'm not sure thats your business...", response: null},
                        {question: "One can always try.", response: null},
                        {question: "Leave them alone.", response: null}
                    ]}},
                    {question: "You could change that.", response: {line: "I plan to! I want to show them what life is all about.", questions: [
                        {question: "Eh.", response: null},
                        {question: "I'm not sure thats your business...", response: null},
                        {question: "Good.", response: null}
                    ]}}
                ]}},
                {question: "Well, you have to deal with the cards you have been dealt!", response: {line: "It makes me uncomfortable thinking something so important is out of my control. I wish I could have picked my group.", questions: [
                    {question: "Well, its just something we have to deal with. There are things you don't have a say in.", response: {line: "I guess.", questions: [
                        {question: "You just have to live with it.", response: null}
                    ]}},
                    {question: "Its more about how you respond to the things that happen.", response: {line: "Eh. Doubt it.", questions: [
                        {question: "Eh.", response: null}
                    ]}}
                ]}},
                {question: "I admire that goal.", response: {line: "Yeah, me too. I have decided its my goal in life. I live to show my ability.", questions: [
                    {question: "Don't we all.", response: null},
                    {question: "Theres more to life than just that.", response: null}
                ]}}
            ]}},
            {question: "Well that sucks.", response: null}
        ]}},
        {question: "Nice!", response: null}
    ]}},
    {question: "What is your goal this year?", response: {line: "I want to make something that will last at our school. I want to make something so neat that they never take it down.", questions: [
        {question: "To make something that lasts. The ultimate human goal.", response: null},
        {question: "Yeah, I see what you mean.", response: null}
    ]}},
    {question: "What do you do enjoy doing?", response: {line: "I enjoy composing music. I find it really inspiring that Mozart's music is still considered genius even after hundreds of years. What contines to amaze me is how all of this pop music becomes popular.", questions: [
        {question: "Hmmm.", response: null}
    ]}}
];

//Transcendence denying
var criminal3 = [
    {question: "How are you doing?", response: {line: "I feel ok.", questions: [
        {question: "Anything you want to add?", response: {line: "I am feeling a bit frustrated.", questions: [
            {question: "Why?", response: {line: "I'm just not good at anything.", questions: [
                {question: "Well, you know, practice makes perfect.", response: {line: "I thought practice was for refining whatever skills you were born with. I wasn't born with any.", questions: [
                    {question: "Just try and practice.", response: null},
                    {question: "Interesting.", response: null},
                    {question: "That kind of frustration can be damaging. How do you deal with it?", response: {line: "Well, so far, I have just been letting it build up.", questions: [
                        {question: "That can't be good.", response: null}
                    ]}}
                ]}},
                {question: "I have those kind of days as well.", response: {line: "Its not that. I just feel frustrated with life.", questions: [
                    {question: "Why?", response: {line: "I suck at everything.", questions: [
                        {question: "Thats some next level stuff right there.", response: null},
                        {question: "My condolances to your mother.", response: null},
                        {question: "No one is born good at stuff.", response: null}
                    ]}}
                ]}},
                {question: "I know that feeling well.", response: null}
            ]}},
			{question: "Me too.", response: null}
		]}}
	]}},
	{question: "What is your goal this year?", response: {line: "Nothing.", questions: [
		{question: "Nothing you want to work on, nothing you want to improve?..", response: {line: "Can't improve if you don't have anything to start with."}, questions: [
			{question: "Ok.", response: null},
			{question: "You have got to be good at something...", response: null},
			{question: "If you try hard enough, you will become better.", response: null}
		]},
		{question: "Yeah, I see what you mean.", response: null}
	]}}
];
criminals = [criminal1, criminal2, criminal3];