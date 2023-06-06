// Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8
// characters. The highlighted words should be with a yellow background color.


var paragraph = document.getElementById('my-paragraph');
var words = paragraph.innerHTML.split(' '); // Split paragraph into individual words

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 8) {
    words[i] = '<span class="highlight">' + words[i] + '</span>'; // Wrap highlighted words in a span element
  }
}

paragraph.innerHTML = words.join(' '); // Join words back into a string and update paragraph content
