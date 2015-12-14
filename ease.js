/**
 * 处理跨浏览区的事件对象
 */
var EventUtil = {
  /**
   * @desc 绑定事件处理程序
   * @param {object} element 绑定的元素
   * @param {string} type 事件类型
   * @param {function} handler 事件时间处理程序
   */
  addHandler: function(element, type, handler) {
    if (event.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (event.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  },

  /**
   * @desc 删除事件处理程序
   * @param {object} element 绑定的元素
   * @param {string} type 事件类型
   * @param {function} handler 事件时间处理程序
   */
  removeHandler: function(element, type, handler) {
    if (element.removeHandler) {
      element.removeHandler(type, handler, false);
    } else if (element.detach) {
      element.detach('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  },

  /**
   * @desc 返回事件对象
   * @param {object} event 事件对象
   * @return {object} 返回值为事件对象
   */
  getEvent: function(event) {
    return event ? event : window.event;
  },

  /**
   * @desc 返回事件目标
   * @param {object} event 事件对象
   * @return {object} 返回值为事件目标
   */
  getTarget: function(event) {
    return event.target || event.srcElement;
  },

  /**
   * @desc 取消事件的默认行为
   * @param {object} element 绑定的元素
   */
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  /**
   * @desc 阻止事件的进一步捕获或冒泡
   * @param {object} element 绑定的元素
   */
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.canelBubble = true;
    }
  }
};
