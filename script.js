
    document.getElementById('count-btn').addEventListener('click', countVowels);

    function countVowels() {
        var inputText = document.getElementById('input-text').value.toLowerCase();

        var vowelCount = 0;
        for (var i = 0; i < inputText.length; i++) {
            var currentChar = inputText[i];
            if (isVowel(currentChar)) {
                vowelCount++;
            }
        }

        var resultElement = document.getElementById('vowel-count');
        resultElement.innerHTML = ' ' + vowelCount;
    }

    function isVowel(char) {
        return "aeiou".includes(char);
    }

