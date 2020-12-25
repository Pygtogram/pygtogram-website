const bibleBooks = ['Genèse', 'Exode', 'Lévitique', 'Nombres', 'Deutéronome',
  'Josué', 'Juges', 'Ruth', '1 Samuel', '2 Samuel', '1 Rois', '2 Rois',
  '1 Chroniques', '2 Chroniques', 'Esdras', 'Néhémie', 'Esther', 'Job',
  'Psaumes', 'Proverbes', 'Écclésiaste', 'Cant. des Cant.', 'Ésaïe', 'Jérémie',
  'Lament.', 'Ézéchiel', 'Daniel', 'Osée', 'Joël', 'Amos', 'Abdias', 'Jonas',
  'Michée', 'Nahum', 'Habakuk', 'Sophonie', 'Aggée', 'Zacharie', 'Malachie',
  'Matthieu', 'Marc', 'Luc', 'Jean', 'Actes', 'Romains', '1 Corinthiens',
  '2 Corinthiens', 'Galates', 'Éphésiens', 'Philippiens', 'Colossiens',
  '1 Thessaloniciens', '2 Thessaloniciens', '1 Timothée', '2 Timothée', 'Tite',
  'Philémon', 'Hébreux', 'Jacques', '1 Pierre', '2 Pierre', '1 Jean', '2 Jean',
  '3 Jean', 'Jude', 'Apocalypse'];
let bibleContent;
import('./bible.json').then(({bible: content}) => {
  bibleContent = content;
});


/**
 * Permet de récupérer les informations de la Bible
 */
export class BibleService {
  /**
   * Récupère le nom du livre
   * @param {Number} bookId numéro du livre (1-66)
   * @return {String} nom du livre
   */
  getBookName(bookId) {
    return bibleBooks[bookId-1];
  }

  /**
   * Récupère le texte d'un verset
   * @param {Number} bookId numéro du livre (1-66)
   * @param {Number} chapterId numéro du chapitre (1-...)
   * @param {Number} verseId numéro du verset (1-...)
   * @return {String} texte du verset
   */
  getVerseText(bookId, chapterId, verseId) {
    try {
      return bibleContent[bookId-1][chapterId-1][verseId-1];
    } catch (e) {
      return '';
    }
  }
}
