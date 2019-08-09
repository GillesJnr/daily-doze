var quotes = [
  {author:"Walt Disney", quote:"The way get started is to quit talking and begin doing"},
  {author:"Winston Churchill", quote:"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty"},
  {author:"Will Rogers", quote:"Don’t Let Yesterday Take Up Too Much Of Today."},
  {author:"Unknown", quote:"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."},
  {author:"Vince Lombardi", quote:"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."},
  {author:"Steve Jobs", quote:"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You."},
  {author:"Rob Siltanen", quote:"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do."},
  {author:"Og Mandino", quote:"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough."},
  {author:"Mohnish Pabrai", quote:"Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur."},
  {author:"Maya Angelou", quote:"We May Encounter Many Defeats But We Must Not Be Defeated."},
  {author:"Johann Wolfgang Von Goethe", quote:"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do."},
  {author:"Brian Tracy", quote:"Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?"},
  {author:"Dr. Henry Link", quote:"We Generate Fears While We Sit. We Overcome Them By Action."},
  {author:"Henry Ford", quote:"Whether You Think You Can Or Think You Can’t, You’re Right."},
  {author:"Helen Keller", quote:"Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing."},
  {author:"Hasidic Proverb", quote:"The Man Who Has Confidence In Himself Gains The Confidence Of Others."},
  {author:"Albert Einstein", quote:"Creativity Is Intelligence Having Fun."},
  {author:"Don Zimmer", quote:"What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time."},
  {author:"Theodore Roosevelt", quote:"Do What You Can With All You Have, Wherever You Are."},
  {author:"Brian Tracy", quote:"Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You."},
  {author:"C.S. Lewis", quote:"You Are Never Too Old To Set Another Goal Or To Dream A New Dream."},
  {author:"Confucius", quote:"To See What Is Right And Not Do It Is A Lack Of Courage."},
  {author:"Brian Tracy", quote:"Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality."},
  {author:" Brian Tracy", quote:"The Future Belongs To The Competent. Get Good, Get Better, Be The Best!"},
  {author:"Jack Canfield", quote:"For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded."},
  {author:"John Wooden", quote:"Things Work Out Best For Those Who Make The Best Of How Things Work Out."},
  {author:"Marcus Tullius Cicero", quote:"A Room Without Books Is Like A Body Without A Soul."},
  {author:"Michael Phelps", quote:"I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time."},
  {author:"Michelle Obama", quote:"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals."},
  {author:"Robert H. Schuller", quote:"Today’s Accomplishments Were Yesterday’s Impossibilities."},
  {author:"Steve Jobs", quote:"The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle."},
  {author:"Zig Ziglar", quote:"You Don’t Have To Be Great To Start, But You Have To Start To Be Great."},
  {author:"Brian Tracy", quote:"A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power."},
  {author:"Brian Tracy", quote:"There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking."},
  {author:"Unknown", quote:"Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word."},
  {author:"Unknown", quote:"Leaders Are Innovative, Entrepreneurial, And Future-Oriented. They Focus On Getting The Job Done."}
];


module.exports = function () {
  var doze = quotes[Math.floor(Math.random() * quotes.length)];
  return formatQuote(doze);
}


function formatQuote(doze){
  return [
    quotes.quote,
    quote.author
  ].join('\n')
}
