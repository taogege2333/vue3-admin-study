<template>
  <div class="date-panel">
    <div class="operate">
      <div class="operate-item">
        <div class="icon icon-reduce" @click="reduceYear"><</div>
        <div class="value">{{ year }}</div>
        <div class="icon icon-add" @click="addYear">></div>
      </div>
      <div class="operate-item">
        <div class="icon icon-reduce" @click="reduceMonth"><</div>
        <div class="value">{{ month }}</div>
        <div class="icon icon-add" @click="addMonth">></div>
      </div>
    </div>
    <div class="date-list">
      <div class="date-row">
        <div class="date-item week" v-for="week in weeks">{{ week }}</div>
      </div>
      <div class="date-row" v-for="rows in days">
        <div
          class="date-item day"
          :class="{'current-date': isSameDay(date), 'not-current-month': !isCurrentMonth(date)}"
          v-for="date in rows"
          :key="date.getTime()"
          @click="handleClick(date)"
        >{{ date.getDate() }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, ref, watch } from 'vue'
import { getFormateDays } from '@/utils/date'

const emit = defineEmits(['change'])

const weeks = ['日', '一', '二', '三', '四', '五', '六']
const currentDate = shallowRef(new Date())
const year = ref(currentDate.value.getFullYear())
const month = ref(currentDate.value.getMonth() + 1)
const days = shallowRef(getFormateDays(year.value, month.value))

watch(currentDate, () => {
  emit('change', currentDate.value)
})

const reduceYear = () => {
  if (year.value === 0) return
  year.value--
  days.value = getFormateDays(year.value, month.value)
}
const addYear = () => {
  year.value++
  days.value = getFormateDays(year.value, month.value)
}
const reduceMonth = () => {
  if (month.value === 1) {
    year.value--
    month.value = 12
  } else {
    month.value--
  }
  days.value = getFormateDays(year.value, month.value)
}
const addMonth = () => {
  if (month.value === 12) {
    year.value++
    month.value = 1
  } else {
    month.value++
  }
  days.value = getFormateDays(year.value, month.value)
}
const handleClick = (date) => {
  currentDate.value = date
  if (!isCurrentMonth(date)) {
    year.value = date.getFullYear()
    month.value = date.getMonth() + 1
    days.value = getFormateDays(year.value, month.value)
  }
}

const isSameDay = (date) => {
  if (
    currentDate.value.getFullYear() === date.getFullYear() &&
    currentDate.value.getMonth() === date.getMonth() &&
    currentDate.value.getDate() === date.getDate()
  ) {
    return true
  } else {
    return false
  }
}
const isCurrentMonth = (date) => {
  if ((date.getMonth() + 1) === month.value) {
    return true
  } else {
    return false
  }
}

</script>

<style scoped lang="scss">
$border-color: #cccccc;

.date-panel {
  width: 288px;
  user-select: none;
  .operate {
    display: flex;
    background: #ffffff;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
    border-top: 1px solid $border-color;
    .operate-item {
      width: 50%;
      display: flex;
      &:first-child {
        border-right: 1px solid $border-color;
      }
      .icon {
        flex-basis: 40px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }
      .value {
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center
      }
    }
  }
  .date-list {
    box-sizing: content-box;
    border: 1px solid $border-color;
    .date-row {
      display: flex;
      & + .date-row {
        border-top: 1px solid $border-color;
      }
      .date-item {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #ffffff;
        box-sizing: content-box;
        cursor: pointer;

        & + .date-item {
          border-left: 1px solid $border-color;
        }
        &.week {
          font-size: 14px;
          font-weight: bold;
        }
        &.day {
          font-size: 12px;
          &:hover {
            background: rgba(64 158 255 / 0.2);
            color: white;
          }
        }
        &.current-date {
          background: rgba(64 158 255 / 0.5);
          color: white;
        }
        &.not-current-month {
          color: #888888;
        }
      }
    }
  }
}
</style>
