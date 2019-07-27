

exports.seed = function(knex, Promise) {
  return knex('events').insert([        {
    title: "Wedding",
    description: "Wedding is a ceremony where two people are united in marriage",
    location: "Paris",
  },
  {
    title: "Baby shower",
    description: "A baby shower is a way to celebrate the expected or delivered birth of a child by presenting gifts to the mother at a party, whereas other cultures host a baby shower to celebrate the transformation of a woman into a mother",
    location: "Philly",
  },
  {
    title: "Thanksgiving",
    description: "Thanksgiving Day is a national holiday celebrated in Canada, the United States,",
    location: "NYC",
  },
  {
    title: "Happy New Year ",
    description: "New Year is the time or day at which a new calendar year begins and the calendar's year count increments by one.",
    location: "USA",
  },
  {
    title: "Christmas",
    description: "Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world.",
    location: "Miami",
  },
  {
    title: "Easter",
    description: "Easter, also called Pascha , is a festival and holiday celebrating the resurrection of Jesus from the dead, described in the New Testament as having occurred on the third day",
    location: "DC",
  },
  {
    title: "Halloween",
    description: "The word Halloween literally means the evening before All Hallows Day or All Saint’s Day, celebrated on November 1.",
    location: "Boston",
  },
  {
    title: "Independence day",
    description: "Independence Day (colloquial: the Fourth of July; July Fourth; the Fourth) is a federal holiday in the United States commemorating the adoption of the Declaration of Independence on July 4, 1776",
    location: "Philadelphia",
  },
  {
    title: "Capstones",
    description: "Join us Wednesday, September 12th from 4:00pm to 7:00pm as we showcase capstone projects from graduates of BOTH our Web Development & Data Science programs.",
    location: "NYC SoHo",
  },
  {
    title: "My birthday",
    description: "No more words just go to celebrate it",
    location: "NYC",
  }]);
};




