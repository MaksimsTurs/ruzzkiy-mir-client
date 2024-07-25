import type { LineHave } from "../contentParser.type";

import regexp from "./regexp";

export default {
  bold: function(line) {
    regexp.BOLD_REGEXP.lastIndex = 0
    return regexp.BOLD_REGEXP.test(line)
  },
  header1: function(line) {
    regexp.HEADER_REGEXP_1.lastIndex = 0
    return regexp.HEADER_REGEXP_1.test(line)
  },
  header2: function(line) {
    regexp.HEADER_REGEXP_2.lastIndex = 0
    return regexp.HEADER_REGEXP_2.test(line)
  },
  img: function(line) {
    regexp.IMAGE_REGEXP.lastIndex = 0
    return regexp.IMAGE_REGEXP.test(line)
  },
  link: function(line) {
    regexp.LINK_REGEXP.lastIndex = 0
    return regexp.LINK_REGEXP.test(line)
  },
  video: function(line) {
    regexp.LINK_REGEXP.lastIndex = 0
    return regexp.VIDEO_REGEXP.test(line)
  },
  lineIntendention: function(line) {
    return line[0] === '-'
  },
  listItem: function(line) {
    return line[0] === '+'
  }
} as LineHave