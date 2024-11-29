// config/checklistRules.js
const checklistRules = [
    {
        rule: 'valuationFeePaid',
        condition: (data) => data.valuationFeePaid === true
    },
    {
        rule: 'ukResident',
        condition: (data) => data.ukResident === true
    },
    {
        rule: 'riskRatingMedium',
        condition: (data) => data.riskRating === 'Medium'
    },
    {
        rule: 'ltvBelow60',
        condition: (data) => data.ltv < 60
    }
];

module.exports = checklistRules;