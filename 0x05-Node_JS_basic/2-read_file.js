/**
 * Read a database file synchronously with Node JS.
 * @param {string} path - Path to the file.
 * @returns {undefined} undefined - This function does not return anything.
 * @autor David Tei <https://github.com/davtei>
 */

const fs = require('fs');

function countStudents (path) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const content = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const lines = content.toString().split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] !== '') {
        const line = lines[i].split(',');
        if (i === 0) {
          for (let j = 0; j < line.length; j++) {
            fields[line[j]] = j;
          }
        } else {
          length += 1;
          if (line[fields.field] in students) {
            students[line[fields.field]].push(line[fields.firstname]);
          } else {
            students[line[fields.field]] = [line[fields.firstname]];
          }
        }
      }
    }
    console.log(`Number of students: ${length}`);
    for (const key of Object.keys(students)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
