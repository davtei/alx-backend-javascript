/**
 * Contains the miscellaneous route handlers.
 * @author David Tei <https://github.com/davtei>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
