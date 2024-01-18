let idCounter = 1;

class Quote {
  id;
  author;
  content;

  constructor (author, content) {
    this.id = idCounter;
    this.author = author;
    this.content = content;
    
    idCounter++;
  }
}

export default Quote;
