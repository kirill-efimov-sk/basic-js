  module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {return false}
    else {
    return members.map(member => {if (typeof member === 'string') {
      return member.trim().charAt(0).toUpperCase();
      }
    }).sort().join('');
  }};
