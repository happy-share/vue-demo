<template>
  <div>
    <h1 v-for="(item, index) in dayDatas" :key=index>
      {{getSolarDate(item)}} ==>> {{countDays(item)}} --> {{simpleShow(item)}}
    </h1>

    <div class="big">{{test}}</div>
    <div class="big">{{test1}}</div>
     <div class="big">{{test2}}</div>
  </div>
</template>

<script>
import LunarCalendar from 'lunar-calendar'
import moment from 'moment'
import mojiTranslate from 'moji-translate'
import Emoji from 'emoji-js'
import dayDatas from './days'

const emoji = new Emoji()
// moment.locale('zh-cn')
moment().local()

export default {
  name: 'test-lunar-calendar',
  data () {
    return {
      dayDatas,
      test: moment('20120920', 'YYYYMMDD').fromNow(),
      test1: mojiTranslate.translate('hello smile laugh happy basketball'),
      test2: emoji.replace_colons('hello :smile: world :hash: :diamond_shape_with_a_dot_inside::1234::wink:')
    }
  },
  methods: {
    // 1994-12-21 => 1995-01-21
    getSolarDate (data) {
      const { type, theDay } = data
      const theDate = moment(theDay)
      if (type === 'lunar') {
        console.log(theDate.get('year'), theDate.get('month'), theDate.get('date'))
        const {year: _year, month: _month, date: _date} = LunarCalendar.lunarToSolar(theDate.get('year'), theDate.get('month'), theDate.get('date'))
        theDate.set('year', _year)
        theDate.set('month', _month)
        theDate.set('date', _date)
      }
      return theDate
    },
    countDays (data) {
      return moment().diff(this.getSolarDate(data), 'days')
    },
//     moment("20111031", "YYYYMMDD").fromNow(); // 7 年前
// moment("20120620", "YYYYMMDD").fromNow(); // 6 年前
// moment().startOf('day').fromNow();        // 18 小时前
// moment().endOf('day').fromNow();          // 6 小时内
// moment().startOf('hour').fromNow();       // 9 分钟前

    simpleShow (data) {
      return moment(this.getSolarDate(data), 'YYYYMMDD').fromNow()
    }
  },
  created () {

  }
}
</script>

<style scoped>
  .big{
    font-size: 50px;
  }
</style>

