const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function entryCountTemplate() {
  this.entryCount = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };
}

function wordCountTemplate() {
  this.wordCount = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };
}

function barGraphDataTemplate() {
  this.loved = new entryCountTemplate();
  this.happy = new entryCountTemplate();
  this.calm = new entryCountTemplate();
  this.sad = new entryCountTemplate();
  this.anxious = new entryCountTemplate();
  this.angry = new entryCountTemplate();
}

function lineGraphDataTemplate() {
  this.loved = new wordCountTemplate();
  this.happy = new wordCountTemplate();
  this.calm = new wordCountTemplate();
  this.sad = new wordCountTemplate();
  this.anxious = new wordCountTemplate();
  this.angry = new wordCountTemplate();
}

function FeelingCounterTemplate() {
  this.entryCount = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };
  this.wordCount = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };
}

function CounterObj() {
  this.loved = new FeelingCounterTemplate();
  this.happy = new FeelingCounterTemplate();
  this.calm = new FeelingCounterTemplate();
  this.sad = new FeelingCounterTemplate();
  this.anxious = new FeelingCounterTemplate();
  this.angry = new FeelingCounterTemplate();
}

function QuickInfoData() {
  this.January = 0;
  this.February = 0;
  this.March = 0;
  this.April = 0;
  this.May = 0;
  this.June = 0;
  this.July = 0;
  this.August = 0;
  this.September = 0;
  this.October = 0;
  this.November = 0;
  this.December = 0;
}

export {
  months,
  CounterObj,
  QuickInfoData,
  barGraphDataTemplate,
  lineGraphDataTemplate,
};
