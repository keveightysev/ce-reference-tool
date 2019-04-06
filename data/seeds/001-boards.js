exports.seed = function(knex) {
  const seed = createBoards();
  return knex('boards').insert(seed);
};

function createBoards() {
  const states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];
  const professions = ['psychologist', 'social worker'];
  const seed = [];
  for (let i = 0; i < states.length; i++) {
    for (let j = 0; j < professions.length; j++) {
      const temp = {
        country: 'us',
        state: states[i],
        profession: professions[j],
        accepted_credits: 'No information',
        url: 'http://',
      };
      seed.push(temp);
    }
  }
  return seed;
}
