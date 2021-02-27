<template>
  <tr style="height: 4.1rem;">
    <td style="white-space: nowrap;">
      {{ bookName }} {{ chapter }}:{{ verse }}
    </td>
    <td>
      <!--<p
        class="verse-overflow"
        v-html="verseText"
      />-->
      <p
        v-html="verseText"
      />
    </td>
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
      let verse = this.bibleService.getVerseText(this.book,
          this.chapter, this.verse);

      if (verse) {
        this.$store.state.concordanceWords.forEach((word) => {
          verse = verse.replaceAll(word, '<b>$&</b>');
        });
      }

      return verse;
    },
    bookName() {
      return this.bibleService.getBookName(this.book);
    },
  },
};
</script>

<style>
.verse-overflow {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
