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
   * @param {object} event 事件对象
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
   * @param {object} event 事件对象
   */
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.canelBubble = true;
    }
  },

  /**
   * @desc 获取鼠标事件中相关元素
   * @param {object} event 事件对象
   */
  getRelatedTarget: function(event) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },

  /**
   * @desc 获取鼠标按钮的值
   * @param {object} event 事件对象
   */
  getButton: function(event) {
    if (document.implementation.hasFeature('MouseEvents', '2.0')) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 4;
      }
    }
  }
};
