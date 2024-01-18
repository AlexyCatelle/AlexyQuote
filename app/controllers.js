import quotes from './data.js';

export const home = (req, res) => {
    res.render('global');
  };

export const quote = (req, res,next) => 
    
    {const id = req.params.id;
        const quote = quotes.find(element => element.id === id);
        if (quote) {
            let nextId= quote.id+1
            res.render('global', {
               idg : quote.id,
               author:quote.author,
               content:quote.content,
               nextQuote :`/quote/${nextId}`,
            });
        }
        else {
          next();
        }
    };
  