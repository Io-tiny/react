import { createMemoryHistory } from 'history'
window.createMemoryHistory = createMemoryHistory;
window.h = createMemoryHistory({
  initialEntries: ['/', '/abc'],  // 表示初始数组内容
  initialIndex: 0  // 默认指针指向的数组下标
})

// memory是存储在内存中，一般是使用在手机端