let text_area = document.querySelector('textarea');
const getText = () => text_area.value;
const setText = (t) => text_area.value = t;

let upper = document.getElementById('upper-case');
let lower = document.getElementById('lower-case');
let proper = document.getElementById('proper-case');
let sentence = document.getElementById('sentence-case');

upper.addEventListener('click', () => setText(getText().toUpperCase()));

lower.addEventListener('click', () => setText(getText().toLowerCase()));

const indexFirstLetter = (fragment) => {
    for (let char of fragment) {
        if (char.match(/\d/)) {
            return -1;
        }
        if (char.match(/[a-zA-Z]/)) {
            return fragment.indexOf(char);
        }
    }
    return -1;
}

const capitalizeFragments = (text, sep) => {
    let fragments = text.toLowerCase().split(sep);
    for (let i=0; i < fragments.length; i++) {
        let ifl= indexFirstLetter(fragments[i]); // index of first letter
        if (ifl !== -1) {
            fragments[i] = fragments[i].slice(0, ifl).concat(fragments[i][ifl].toUpperCase().concat(fragments[i].slice(ifl + 1)));
        }
    }
    return fragments.join(sep);
}

proper.addEventListener('click', () => {
    setText(capitalizeFragments(getText(), " "));
})

sentence.addEventListener('click', () => {
    setText(capitalizeFragments(getText(), "."));
})
