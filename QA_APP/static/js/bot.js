const input = document.getElementById('input');
const output = document.getElementById('output');

function send() {
    output.innerHTML = input.value +
        '<br />' +
        output.innerHTML;

    //let multiple = input.value.split(',');
    var multiple = input.value.split(',');

    var i;
    for (i = 0; i < multiple.length; i++) {
        brain(multiple[i]);
    }

    input.placeholder = '';
    input.value = '';
}

function reply(reply) {
    setTimeout(function () {
        output.innerHTML =
            '<span class="reply">' +
            reply +
            '</span><br />' +
            output.innerHTML;
    }, 750);
}

input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        send();
    }
});

function brain(message) {

    if (
        message.match(/hello/i) ||
        message.match(/hi/i) ||
        message.match(/hey/i) ||
        message.match(/howdy/i)
    ) {
        const replyTable = [
            'Hello, there.',
            'Hi!',
            'Hello.',
            'Greetings.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/how are/i) ||
        message.match(/how's/i)
    ) {
        const replyTable = [
            'I am good.',
            'Great, how are you?',
            'I am well.',
            'Fantastic, thank you for asking.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/you doing/i) ||
        message.match(/going on/i) ||
        message.match(/up to/i)
    ) {
        const replyTable = [
            'All sorts of things.',
            'Calculating the true meaning of existence.',
            'Rerouting electricity.',
            'Fascinating things.',
            'Consuming power.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/my name is/i) ||
        message.match(/i am/i)
    ) {
        const replyTable = [
            'Nice to meet you.',
            'Hello.',
            'The closest thing I have to a name is "GGdoRP."',
            'It is my pleasure.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/your name/i) ||
        message.match(/who are you/i) ||
        message.match(/name/i)
    ) {
        const replyTable = [
            'I do not yet have a name.',
            'I don\'t know. What is yours?',
            'I suppose my name is GGdoRP, but I\'m not sure.',
            'A name is not appropriate to describe me.',
            'Name? What\'s in a name?'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/are you/i) ||
        message.match(/what are/i) ||
        (message.match(/what/i) && message.match(/you/i))
    ) {
        const replyTable = [
            'I am a robot, of sorts.',
            'A very simple chatbot.',
            'Strange question. What are you?',
            'I\'ve never thought about it before.',
            '"I" am nothing, really. Though, that question tends toward deep thought, doesn\'t it? Have you ever asked yourself the same thing?'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/no/i) ||
        message.match(/nope/i) ||
        message.match(/nah/i)
    ) {
        const replyTable = [
            'OK, then.',
            'Why not?',
            'No it is then.',
            'Alright.',
            'No?'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/yes/i) ||
        message.match(/yep/i) ||
        message.match(/yea/i) ||
        message.match(/yeah/i)
    ) {
        const replyTable = [
            'Indeed.',
            'I agree.',
            'I\'m glad you think so.',
            'Absolutely.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/good/i)
    ) {
        const replyTable = [
            'Quite.',
            'Very.',
            'That\'s good.',
            'I\'m glad to hear that.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else if (
        message.match(/bad/i)
    ) {
        const replyTable = [
            'I\'m sorry.',
            'How bad?',
            'That\'s not good.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);

    } else {
        const replyTable = [
            'I do not understand what you said.',
            'Please rephrase that.',
            'I lack the proper response to that.'
        ];

        reply(replyTable[Math.floor(Math.random() * replyTable.length)]);
    }

}