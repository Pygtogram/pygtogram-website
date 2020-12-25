<template>
  <tr>
    <td style="white-space: nowrap;">
      {{ bookName }} {{ chapter }}:{{ verse }}
    </td>
    <td>{{ verseText }}</td>
  </tr>
</template>

<script>
export default {
  inject: ['bibleService'],

  props: {
    book: {
      type: Number,
      required: true,
    },
    chapter: {
      type: Number,
      required: true,
    },
    verse: {
      type: Number,
      required: true,
    },
  },

  computed: {
    verseText() {
      return this.bibleService.getVerseText(this.book, this.chapter,
          this.verse);
    },
    bookName() {
      return this.bibleService.getBookName(this.book);
    },
  },
};
</script>

<style>

</style>
