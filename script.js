const quizData = [{
         question: "In C++, the token // is used for?",
        a: "integer division",
        b: "concatenation",
        c: "comments",
        d: "decleration",
        correct: "c",
    },
    {
        question: "The function strlen() computes:?",
        a: "the number of non-whitespace characters in a string",
        b: "the length of a string, not including the null terminator",
        c: "the number of alphabetical characters in a string",
        d: "the length of a string, including the null terminator",
        correct: "b",
    },
    {
        question: "In C++, cout is found in which library file?",
        a: "ctype.h",
        b: "stdlib.h",
        c: "math.h",
        d: "iostream.h",
        correct: "d",
    },
    {
        question: "The keyword endl ?",
        a: "defines a symbolic constant",
        b: "specifies that a function is to be compiled, if possible, as inline code",
        c: "provides assertion testing",
        d: "flushes the output stream and adds a new line",
        correct: "d",
    },
    {
        question: "When OOP concept did first came into picture?",
        a: "1980",
        b: "1995",
        c: "1970",
        d: "1993",
        correct: "c",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
    allInputs[4].nextElementSibling.innerText = data.e
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);